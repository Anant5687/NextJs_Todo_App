const mongoose = require('mongoose')
const Db = "mongodb+srv://AnantJindal:5687Anant@cluster0.p3dmbxk.mongodb.net/?retryWrites=true&w=majority"


const connectionToDb = async()=>mongoose.connect(Db)
export default  connectionToDb