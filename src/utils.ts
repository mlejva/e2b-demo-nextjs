export async function waitForEnter() {
  await new Promise<void>(resolve => {
    process.stdin.once('data', () => {
      resolve()
    });
  });
}
