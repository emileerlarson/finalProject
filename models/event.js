import { Timestamp } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        defalut: Date.now,
        required: true
    },
    time: {
        type: Time,
        default: Time,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: ture
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        reqired: true
    },
    description: {
        type: String,
        required: true
    }
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;