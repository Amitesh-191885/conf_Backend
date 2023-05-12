import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    startDateMili: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },
    endDateMili: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },
    duration: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },
    location: [
        {
            type: String,
            required: false,
            trim: true,
            minlength: 3
        }
    ],
    image: [
        {
            type: String,
            required: false,
            trim: true,
            minlength: 3
        }
    ],
    price: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
    },
    organizers: [
        {
            'name': {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            },
            'title': {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            },
            'description': {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            },
            'image': {
                type: String,
                required: true,
                trim: true,
                minlength: 3
            },
            'number': {
                type: Number,
                required: false,
                trim: true,
                minlength: 3
            },
            'email': {
                type: String,
                required: false,
                trim: true,
                minlength: 3
            },
            'website': {
                type: String,
                required: false,
                trim: true,
                minlength: 3
            }
        }
    ]
});

export const Event = mongoose.model('Event', eventSchema);


const organizerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    image: {
        type: Array,
        required: false,
        trim: true,
        minlength: 3
    },
    Number: {
        type: Number,
        required: false,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    website: {
        type: String,
        required: false,
        trim: true,
        minlength: 3
    }
});

export const Organizer = mongoose.model('Organizer', organizerSchema);