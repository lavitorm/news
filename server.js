const express = require ('express')
const app = express()
const mongojs = require ('mongojs')
const ejs = require ('ejs')
const cheerio = require ('cheerio')
const request = require ('request')

app.listen(8000, () => console.log('Server is running on port 8000'))
