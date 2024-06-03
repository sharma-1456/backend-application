// second option two connect database
import dotenv from 'dotenv'
import connectDB from './db/index.js'

// fist option to connect database
// import mongoose from 'mongoose'
// import { DB_NAME } from './constants.js'
// import express from 'express'
// const app=express()

dotenv.config({
    path:'./env'
})
connectDB()





// ( async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("errrr",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("error:",error)
//         throw err
//     }
// })()