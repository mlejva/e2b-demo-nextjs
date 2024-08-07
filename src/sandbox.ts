import { CodeInterpreter } from '@e2b/code-interpreter'

const sandboxTemplateName = 'vercel-demo'

// After 10 minutes, the sandbox will get automatically killed
// If you need to keep the sandbox alive, you can call `sandbox.setTimeout(<newTimeoutValue>)` which will reset the timer
const sandboxLifetime = 5 * 60 * 1000 // 5 minutes

export async function createSandbox() {
  console.log(`✴️ Creating sandbox based on the "${sandboxTemplateName}" template...`)
  const codeInterpreterSandbox = await CodeInterpreter.create(sandboxTemplateName, { timeoutMs: sandboxLifetime })
  console.log('  ✔︎ Sandbox created:', codeInterpreterSandbox.sandboxId)

  return codeInterpreterSandbox
}

export function updateNextjsApp(sbx: CodeInterpreter, code: string) {
  const pathToPageTsx = '/home/user/app/page.tsx'
  return sbx.files.write(pathToPageTsx, code)
}
