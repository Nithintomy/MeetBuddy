import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'
import authRoutes from './Routes/authRoutes.js'
import {register} from './Controllers/auth.js'
import {createPost} from './Controllers/post.js'
import { verifyToken } from './middleware/auth.js'
import userRoutes from './Routes/userRoutes.js'
import postRoutes from './Routes/postRoutes.js'

/*CONFIGURATION*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


dotenv.config()



const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/assets',express.static(path.join(__dirname,'public/assets')))


/*File Storage*/

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/assets')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

/*Routes For Files */
app.post('/auth/register',upload.single('picture'),verifyToken,register)
app.post('/posts',verifyToken,upload.single('picture'),createPost)

app.use('/auth',authRoutes)
app.use('/users',userRoutes)
app.use('/post',postRoutes)

/*Mongoose SetUp */
const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Server is Running on ${PORT}`);
}).catch((err) => {
    console.error('Error occurred while connecting to MongoDB:', err);
});