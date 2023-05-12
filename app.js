import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// router goese here
import { check, getEventsRoute, addEventRoute, delEventRoute, updateEventRoute } from './router/evenRouter.js'

// controller goese here
import { addEvent, checkApi, delEvent, getAllEvents } from './controller/eventController.js'
app.post(check, checkApi)
app.post(getEventsRoute, getAllEvents)
app.post(addEventRoute, addEvent)
app.post(delEventRoute, delEvent)

import {} from './controller/eventController.js'
export default app