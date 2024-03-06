import express from 'express'
import { login } from '../Controllers/auth.js'

const authRoutes = express.Router()

authRoutes.post('/login',login)


export default authRoutes