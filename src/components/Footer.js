import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">VA Agency</h3>
            <p className="text-gray-400">Connecting businesses with expert virtual assistants since 2020.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2024 VA Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}