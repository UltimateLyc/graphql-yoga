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
