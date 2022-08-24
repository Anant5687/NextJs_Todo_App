const mongoose = require("mongoose")

const todoDataSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const todoData = mongoose.models.todoData || new mongoose.model("todoData", todoDataSchema)

export default todoData