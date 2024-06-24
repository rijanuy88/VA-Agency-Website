// src/app/components/HeroSection.js
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Find Your Perfect Virtual Assistant</h1>
        <p className="text-xl mb-6 drop-shadow-md">Connecting businesses with expert virtual assistants</p>
        <div className="space-x-4">
          <Link href="/hire-va" passHref>
            <div className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-transform cursor-pointer">
              Hire a VA
            </div>
          </Link>
          <Link href="/become-va" passHref>
            <div className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-transform cursor-pointer">
              Become a VA
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
