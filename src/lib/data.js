import { Post, User } from "./models"
import { connectDB } from "./utils"



export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find()
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts")
  }
}

export const getPost = async (slug) => {
  try {
    const post = Post.findOne({slug})
    return post
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data")   
  }
}
export const getUser = async (id) => {
  try {
    const user = User.findById(id)
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data")   
  }
}

export const getUsers = async () => {
  try {
    const users = await User.find()
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data")   
  }
}