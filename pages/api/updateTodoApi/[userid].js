import connectionToDb from '../../../config/conn'
import todoData from '../../../model/tododataSchema'

const updateTodoApi = async (req, res) => {
    const userid = req.query.userid
    const { todo, description, date } = req.body
    try {
        await connectionToDb()
        const updateUser = await todoData.findByIdAndUpdate(userid,
            { todo: todo, description: description, date }, { new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
export default updateTodoApi