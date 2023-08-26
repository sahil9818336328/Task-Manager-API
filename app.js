require('./db/connect')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.json())

const port = 5000

const tasks = require('./routes/tasks')

app.use('/api/v1/tasks', tasks)

app.get('/', (req, res) => {
  res.send('Task manager api')
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
