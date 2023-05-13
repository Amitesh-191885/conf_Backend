import express from 'express'
import { addEvent, checkApi, delEvent, getAllEvents, updateEvent } from '../controller/eventController.js'
const router = express.Router()

export const check = router.post('/', checkApi)
export const getEventsRoute = router.post('/getEvents', getAllEvents)
export const addEventRoute = router.post('/addEvent', addEvent)
export const delEventRoute = router.post('/delEvent', delEvent)
export const updateEventRoute = router.post('/updateEvent', updateEvent)