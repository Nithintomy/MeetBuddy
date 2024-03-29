import User from "../Models/UserModel.js";
import Post from "../Models/postModel.js";

export const createPost =async(req,res)=>{
    try {

        const {userId,description,picturePath} = req.body

        const user = User.findById(userId)

        const newPost = new Post({
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            userPicturePath:user.picturePath,
            picturePath,
            likes:{},
            comments:[]
        })

        await newPost.save()

        const post = await Post.find()

        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getFeedPosts = async(req,res)=>{

    try {

        const post = await Post.find()

        res.status(200).json(post)
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getUserPost = async(req,res)=>{
    try {

        const {userId} = req.params

        const post = await Post.findById({userId})

        res.status(200).json(post)
        
    } catch (error) {
        
    }
}

/*UPDATE */

export const likePost = async(req,res)=>{

    try {

        const {id} = req.params;
        const {userId} = req.body

        const post = await Post.findById(id)
        const isLiked = post.likes.get(userId)

        if(isLiked){
            post.likes.delete(userId)
        }else{
            post.likes.set(userId,true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes:post.likes },
            { new:true }
        )
        

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}