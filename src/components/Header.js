import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            VA Agency
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</Link>
            <Link href="/hire-va" className="text-gray-600 hover:text-blue-600 transition duration-300">Hire a VA</Link>
            <Link href="/become-va" className="text-gray-600 hover:text-blue-600 transition duration-300">Become a VA</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
          </nav>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-white">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</Link>
            <Link href="/hire-va" className="text-gray-600 hover:text-blue-600 transition duration-300">Hire a VA</Link>
            <Link href="/become-va" className="text-gray-600 hover:text-blue-600 transition duration-300">Become a VA</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}