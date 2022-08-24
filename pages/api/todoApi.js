import connectionToDb from '../../config/conn'
import todoData from '../../model/tododataSchema'

const getTodo = async (req,res)=>{
    try {
        await connectionToDb()
        const allData = await todoData.find()
        res.status(200).json(allData)
    } catch (error) {
        res.send({error})
    }
}

export default  getTodo