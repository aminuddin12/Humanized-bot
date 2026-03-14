export default defineNitroPlugin((_nitroApp) => {
  // @ts-expect-error: Mocking global initialization
  globalThis.baileysInitialized = true
})
