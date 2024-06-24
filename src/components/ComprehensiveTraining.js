// src/app/components/ComprehensiveTraining.js
import Link from 'next/link';

export default function ComprehensiveTraining() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Training Program</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-prose mx-auto">
        Learn more about our comprehensive training program that ensures our VAs are well-equipped to handle your needs.
      </p>
      <Link href="/comprehensive-training" passHref>
        <div className="inline-block bg-gradient-to-r from-purple-400 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-purple-700 transform hover:scale-105 transition-transform cursor-pointer">
          Learn More
        </div>
      </Link>
    </section>
  );
}
