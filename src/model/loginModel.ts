import mongoose from 'mongoose'

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role:{
        type:String,
        require:true
    }
})

export default mongoose.model('login', loginSchema)
