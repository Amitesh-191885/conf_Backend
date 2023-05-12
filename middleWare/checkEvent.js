export const isCreateEvent = (req) => {
    if (req.body.title != ''
        && req.body.description != ''
        && req.body.startDateMili != 0
        && req.body.endDateMili != 0
        && req.body.duration != 0
        && req.body.location.length != 0
        && req.body.price != 0
    ) {
        return true
    }
    else {
        return false
    }
}
