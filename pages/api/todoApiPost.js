import connectionToDb from '../../config/conn'
import todoData from '../../model/tododataSchema'

const todoApiPost = async (req, res) => {

    const { description, todo, date } = req.body
    try {
        console.log("Trying to connect db")
        await connectionToDb()
        console.log("Connected to DB")
        console.log({ date: req.body.date })
        const newData = new todoData({
            todo, description, date
        })
        await newData.save();
        res.status(201).json(newData)
    } catch (error) {
        res.status(404).json(error)
    }
}
export default todoApiPost