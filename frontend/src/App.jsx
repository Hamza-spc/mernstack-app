import { useState } from 'react'

import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center px-8 py-6">
        {/* Left: Logo */}
        <div className="text-3xl font-bold text-indigo-600">LearnBall</div>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-semibold text-lg">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Learn Skills</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
          <a href="#" className="hover:text-indigo-600">Profile</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-8 pb-6 space-y-3 shadow-md">
          <a href="#" className="block text-gray-700 text-lg hover:text-indigo-600">Home</a>
          <a href="#" className="block text-gray-700 text-lg hover:text-indigo-600">Learn Skills</a>
          <a href="#" className="block text-gray-700 text-lg hover:text-indigo-600">Contact</a>
          <a href="#" className="block text-gray-700 text-lg hover:text-indigo-600">Profile</a>
        </div>
      )}
    </nav>
    </>
  )
}

export default App
