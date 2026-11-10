import { execSync, spawn } from 'child_process'
import fs from 'fs'

const USER_DATA_DIR = '/tmp/chrome_snap_' + Date.now()

async function capture() {
  console.log('Launching headless Chrome...')
  const chromeProc = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9444',
    `--user-data-dir=${USER_DATA_DIR}`,
    '--disable-gpu',
    '--window-size=1440,900',
    'http://localhost:5174/',
  ])

  // Wait 2s for chrome to start
  await new Promise((r) => setTimeout(r, 2000))

  try {
    const listRes = await fetch('http://127.0.0.1:9444/json/list')
    const tabs = await listRes.json()
    const pageTab = tabs.find((t) => t.type === 'page')
    if (!pageTab) throw new Error('No page tab found')

    console.log('Connecting to websocket:', pageTab.webSocketDebuggerUrl)
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl)

    await new Promise((res, rej) => {
      ws.onopen = res
      ws.onerror = rej
    })

    let id = 1
    const send = (method, params = {}) =>
      new Promise((resolve) => {
        const msgId = id++
        const listener = (event) => {
          const data = JSON.parse(event.data)
          if (data.id === msgId) {
            ws.removeEventListener('message', listener)
            resolve(data.result)
          }
        }
        ws.addEventListener('message', listener)
        ws.send(JSON.stringify({ id: msgId, method, params }))
      })

    // Enable Page and Runtime
    await send('Page.enable')
    await send('Runtime.enable')

    const snap = async (filename, scrollY, waitMs = 1000) => {
      if (scrollY !== undefined) {
        await send('Runtime.evaluate', {
          expression: `window.scrollTo(0, ${scrollY})`,
        })
      }
      await new Promise((r) => setTimeout(r, waitMs))
      const { data } = await send('Page.captureScreenshot', { format: 'png' })
      const buf = Buffer.from(data, 'base64')
      const outPath = `/Users/samarsethi/.gemini/antigravity/brain/9acbf668-2e30-45ac-85c2-d6d9c14f04d3/${filename}`
      fs.writeFileSync(outPath, buf)
      console.log(`Saved screenshot: ${filename} (${buf.length} bytes)`)
    }

    // 1. Cover at rest (0% scroll)
    await snap('screen_1_cover.png', 0, 1500)

    // 2. Mid tear (50% progress in pinned intro ~ 900px scroll)
    await snap('screen_2_tear_mid.png', 900, 1500)

    // 3. Selected Work full view (after intro tear ~ 2000px scroll)
    await snap('screen_3_selected_work.png', 2100, 1500)

    // 4. About Me page (~ 5200px scroll)
    await snap('screen_4_about_me.png', 5200, 1500)

    // 5. Technical Compendium (~ 7800px scroll)
    await snap('screen_5_compendium.png', 7800, 1500)

    // 6. Contact Desk (~ 10200px scroll)
    await snap('screen_6_contact.png', 10200, 1500)

    ws.close()
  } finally {
    chromeProc.kill()
    fs.rmSync(USER_DATA_DIR, { recursive: true, force: true })
  }
}

capture().catch((e) => {
  console.error('Capture error:', e)
  process.exit(1)
})
