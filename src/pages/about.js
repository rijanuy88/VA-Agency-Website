import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | VA Agency</title>
        <meta name="description" content="Learn about our mission and team" />
      </Head>
      <div className="container mx-auto px-4 py-12 bg-white shadow-md rounded-lg m-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">About Us</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            VA Agency was founded in 2020 with a mission to connect businesses with skilled virtual assistants. 
            We believe in empowering both businesses and remote professionals to thrive in the digital age.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member components here */}
            <div className="team-member bg-gray-50 p-4 rounded-lg shadow-md">
              <img src="/images/team1.jpg" alt="Team Member 1" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="team-member bg-gray-50 p-4 rounded-lg shadow-md">
              <img src="/images/team2.jpg" alt="Team Member 2" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
            </div>
            <div className="team-member bg-gray-50 p-4 rounded-lg shadow-md">
              <img src="/images/team3.jpg" alt="Team Member 3" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Customer Support Manager</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Excellence in service</li>
            <li className="mb-2">Continuous learning and improvement</li>
            <li className="mb-2">Transparency and integrity</li>
            <li className="mb-2">Empowering remote professionals</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}