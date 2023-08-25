const express = require('express')
const app = express()
const port = 5000

const tasks = require('./routes/tasks')

app.use('/api/v1/tasks', tasks)

app.get('/', (req, res) => {
  res.send('Task manager api')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
})
