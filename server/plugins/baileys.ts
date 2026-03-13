import { Server } from 'socket.io'

export default defineNitroPlugin((nitroApp) => {
  // Check if we are in a browser context (not possible in Nitro but good safety)
  if (process.server) {
    const io = new Server(3001, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    })

    console.log('[Baileys Plugin] WebSocket Server initialized on port 3001')

    nitroApp.hooks.hook('render:html', () => {
      // Logic for broadcasting QR/Status can be injected here
      // For now, we simulate a QR broadcast every 30 seconds if requested
    })

    // Store IO instance globally in Nitro context if needed
    // @ts-ignore
    global.io = io

    io.on('connection', (socket) => {
      console.log('[Baileys Plugin] Client connected to WhatsApp Engine')
      
      // Emit initial status
      socket.emit('wa:status', { status: 'DISCONNECTED', qr: null })
      
      socket.on('disconnect', () => {
        console.log('[Baileys Plugin] Client disconnected')
      })
    })
  }
})
