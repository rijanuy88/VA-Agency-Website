import Head from 'next/head';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | VA Agency</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
            <p className="mb-2"><strong>Address:</strong> 123 VA Street, Business City, 12345</p>
            <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-2"><strong>Email:</strong> info@vaagency.com</p>
            <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
