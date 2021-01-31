import './config/load-envs'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (_req: Request, res: Response) =>
  res.status(200).send('OK!')
)

// error handler
app.use((err: any, _req: Request, res: Response) => {
  const status = err.statusCode || 500
  const { message } = err

  res.status(status).send(message)
})

app.listen(3001, () => console.log('Server running on port 3001'))
