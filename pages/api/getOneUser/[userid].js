import connectionToDb from '../../../config/conn'
import todoData from '../../../model/tododataSchema'

const singleTodoApi = async (req, res) => {
    const userid = req.query.userid
    console.log(userid)
    try {
        await connectionToDb()

        const oneUser = await todoData.find({ _id: userid })
        res.status(200).json(oneUser)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
export default singleTodoApi