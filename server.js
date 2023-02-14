const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const routerAuth = require('./routes/auth')
const routerBlog = require('./routes/blog')

const app = express()
const port = 3000

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extends : true,
}))

app.use(routerAuth)
app.use(routerBlog)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})