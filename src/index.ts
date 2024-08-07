import process from 'node:process'
import * as dotenv from 'dotenv'
import { waitForEnter } from './utils'
import {
  createSandbox,
  updateNextjsApp
} from './sandbox'
import { aiGeneratedCode } from './ai-generated-code'
dotenv.config()

console.log('=============\n')

const sandbox = await createSandbox()
const host = sandbox.getHost(3000)
console.log(`  ✔︎ Next.js app running inside the sandbox: https://${host}\n`)

console.log('✴️ Press Enter to update the code of Next.js app...')
await waitForEnter()

await updateNextjsApp(sandbox, aiGeneratedCode)
console.log(`  ✔︎ Nextjs app updated: https://${host}i\n`)

console.log('✴️ Press Enter to kill the sandbox and end demo...')
await waitForEnter()

// You can use sandbox.kill() to kill the sandbox immediately
await sandbox.kill()
console.log('  ✔︎ Sandbox killed')
