"use client"
import { handleLogin } from "@/lib/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import {useFormState} from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, undefined);
  const [error, setError] = useState("")


  useEffect(() => {
    if(state?.error){
      setError(state?.error)
      setTimeout(() => {
        setError(null)
      },3000)
    }
    return () => clearTimeout()
  },[state?.error,state?.success])

  return (
    <form action={formAction}>
          <div className="mb-4">
            
            <input
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              type="username"
              id="username"
              name="username"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="mb-4">
         
            <input
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
            type="submit"
          >
            Login
          </button>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <p className="text-gray-400 text-sm mt-3">{"Don't have an account"} 
      <Link href="/register" className="text-blue-400 underline ml-2">Register</Link>
    </p>
        </form>
  )
}

export default LoginForm
