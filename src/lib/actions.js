"use server"
import { auth, signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectDB } from "./utils";
import bcrypt, { genSalt } from "bcrypt"

export const handleRegisterUser = async (previousState,formData) => {
  const {username, email, password, confirmPassword} = Object.fromEntries(formData);

  if(password !== confirmPassword){
    return {error:"password do not match"}
  }
  try {
    connectDB();
    const user = await User.findOne({username});
    console.log(user);
    
    if(user){
      return {error:"User already exists"}
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    })
    await newUser.save();
    console.log("saved to db");

    return {success: "true"}
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
  }
}

export const handleLogin = async (previousState,formData) => {
  const {username,password} = Object.fromEntries(formData);
  try {
    await signIn("credentials",{username, password})
  } catch (error) {
   console.log(error);
   if(error.message.inclues("CredentialsSignin")){
    return {error:"invalid username or password"}
   }
   throw new Error("something went wrong")
  }
}

export const addBlog = async (formData) => {
  const {title, desc} = Object.fromEntries(formData);
  console.log(img);
  try {
    connectDB()
    const session = await auth()
    const email = session.user.email;
    const user = await User.findOne({email});
    if(!user){
      return {error: 'user not found from the databse'}
    }
    const userId = user._id;
    const newPost = await new Post({
      title,
      desc,
      slug:title,
      userId
    })
    await newPost.save()
    console.log("saved to db");
  } catch (error) {
   console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const handleGithubLogin = async () => {
    await signIn("github");

}

export const handleGithubLogut = async () => {
    await signOut();
}