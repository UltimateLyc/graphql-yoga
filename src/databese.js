import mongoose from 'mongoose'

// Database connection

export async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/mongodbgraphql', {
            userNewUrlParser: true
        })
        console.log('Database conected !!!')
    } catch (error) {
        return console.log('Something went wrong !!!', error)   
    }
}

//mongodb+srv://UltimateLyc:Lyc941204.@cluster0.a3v0quc.mongodb.net/mongodbgraphql?retryWrites=true&w=majority
