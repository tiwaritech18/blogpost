import React from 'react'

const Footer = () => {
  return (
    <footer className="container text-gray-400 py-4 fixed bottom-0">
    <div className=" flex justify-between items-center mt-24">
        <div className="text-sm font-semibold">&copy; {new Date().getFullYear()} </div>
        <div className="text-sm font-semibold">Designed with <span className="text-red-500">&hearts;</span> by Rohit</div>
    </div>
</footer>

  )
}

export default Footer
