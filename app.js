import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// router goese here
import { check, getEventsRoute, addEventRoute, delEventRoute, updateEventRoute } from './router/evenRouter.js'
app.use(check)
app.use(getEventsRoute)
app.use(addEventRoute)
app.use(delEventRoute)
app.use(updateEventRoute)


import {} from './controller/eventController.js'
export default app