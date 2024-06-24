// src/app/components/AboutUs.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
// import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
        <p className="text-lg text-gray-700 mb-6">A brief history of the company and its mission.</p>
        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Add team member photos and bios here */}
          {/*
          <div className="flex flex-col items-center">
            <Image src="/images/team-member-1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full shadow-lg" />
            <p className="text-lg font-semibold mt-2">John Doe</p>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/team-member-2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full shadow-lg" />
            <p className="text-lg font-semibold mt-2">Jane Smith</p>
            <p className="text-gray-600">COO</p>
          </div>
          */}
          <div className="flex flex-col items-center mb-4">
            <FontAwesomeIcon icon={faUserTie} className="text-6xl text-gray-800 mb-2" />
            <p className="text-lg font-semibold mt-2">John Doe</p>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <FontAwesomeIcon icon={faUserTie} className="text-6xl text-gray-800 mb-2" />
            <p className="text-lg font-semibold mt-2">Jane Smith</p>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 mt-6">Our Values</h3>
        <p className="text-lg text-gray-700 mb-6">Highlight the core values and principles of your agency.</p>
      </div>
    </section>
  );
}
