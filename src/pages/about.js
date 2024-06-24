import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us | VA Agency</title>
        <meta name="description" content="Learn about our mission and team" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            VA Agency was founded in 2020 with a mission to connect businesses with skilled virtual assistants. 
            We believe in empowering both businesses and remote professionals to thrive in the digital age.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member components here */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Excellence in service</li>
            <li>Continuous learning and improvement</li>
            <li>Transparency and integrity</li>
            <li>Empowering remote professionals</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}