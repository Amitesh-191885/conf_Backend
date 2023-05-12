import { isCreateEvent } from '../middleWare/checkEvent.js'
import { Event } from '../model/eventModel.js'

export const checkApi = (req, res) => {
    try {
        if (req.body.name == "admin" && req.body.password == "admin") {
            res.json({
                "status": "200",
                "ack": {
                    "isSuccessfull": true,
                    "message": "Server is running"
                }
            })
        }
        else {
            res.json({
                "status": "200",
                "ack": {
                    "isSuccessfull": false,
                    "message": "Invalid credentials"
                }
            })
        }
    }
    catch (error) {
        res.json({
            "status": "404",
            "ack": {
                "isSuccessfull": false,
                "message": error
            }
        })
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.json({
            "status": "200",
            "events": events,
            "ack": {
                "isSuccessfull": true,
                "message": "All events founds",
            }
        })
    } catch (error) {
        res.json({
            "status": "404",
            "ack": {
                "isSuccessfull": false,
                "message": error
            }
        })
    }
}

export const addEvent = async (req, res) => {
    try {
        if (isCreateEvent(req) === false) {
            res.json({
                "status": "200",
                "event": req.body,
                "ack": {
                    "isSuccessfull": false,
                    "message": "credentials are not valid"
                }
            })
        }
        else {
            const event = new Event(req.body)
            await event.save()
            res.json({
                "status": "200",
                "event": event,
                "ack": {
                    "isSuccessfull": true,
                    "message": "Event added successfully"
                }
            })
        }
    }
    catch (error) {
        res.json({
            "status": "404",
            "ack": {
                "isSuccessfull": false,
                "status": 'not able to add event',
                "message": error
            }
        })
    }
}

export const delEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.body.id)
        if (event) {
            await event.deleteOne()
            res.json({
                "status": "200",
                "ack": {
                    "isSuccessfull": true,
                    "message": "event deleted successfully",
                }
            })
        }
        else {
            res.json({
                "status": "200",
                "ack": {
                    "isSuccessfull": false,
                    "message": "event not found",
                }
            })
        }
    } catch (error) {
        res.json({
            "status": "404",
            "ack": {
                "isSuccessfull": false,
                "reason": "not able to delete event",
                "message": error
            }
        })
    }
}