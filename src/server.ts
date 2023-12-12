import { app } from './app'
import { env } from './env'

app.listen(
  {
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
    port: env.PORT,
  },
  () => {
    console.log(`HTTP server running on port ${env.PORT}!`)
  },
)
