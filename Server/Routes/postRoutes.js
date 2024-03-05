import express from 'express'
import {getFeedPosts,getUserPosts,likePost} from '../Controllers/post.js'
import { verifyToken } from '../middleware/auth.js'

const router =express.Router()


router.get('/',verifyToken,getFeedPosts)
router.get('/:userId/posts',getUserPosts)