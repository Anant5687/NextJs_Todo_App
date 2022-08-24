import connectionToDb from '../../../config/conn'
import todoData from '../../../model/tododataSchema'

const deleteTodo = async (req, res) => {
    const userid = req.query.userid
    try {
        await connectionToDb()
        const deletedUser = await todoData.findByIdAndDelete(userid)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
export default deleteTodo