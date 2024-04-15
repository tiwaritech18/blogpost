"use client"

import { handleRegisterUser } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {useFormState} from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(handleRegisterUser, undefined)
  const [error, setError] = useState("")

  const router = useRouter()

  useEffect(() => {
    if(state?.error){
      setError(state?.error)
      setTimeout(() => {
        setError(null)
      },3000)
    }
    state?.success && router.push('/login')
    return () => clearTimeout()
  },[state?.error,state?.success, router])
  return (
    <form action={formAction}>
    <div className="mb-4">
      
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
     
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-indigo-500"
        required
      />
    </div>
    <div className="mb-6">
      
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm your password"
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:border-indigo-500"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
    >
      Sign Up
    </button>
    {error && <p className="text-red-400 text-sm">{error}</p>}

    <p className="text-gray-400 text-sm mt-3">Already  a user? 
      <Link href="/login" className="text-blue-400 underline ml-2">Login</Link>
    </p>
  </form>
  )
}

export default RegisterForm
