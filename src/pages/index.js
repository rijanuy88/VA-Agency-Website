import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
//import '../styles/globals.css'; // Import Tailwind CSS

export default function Home() {
  const services = [
    { title: "Administrative Support", icon: "📁", description: "Efficient management of day-to-day tasks" },
    { title: "Social Media Management", icon: "📱", description: "Engaging content and community management" },
    { title: "Customer Support", icon: "🤝", description: "Responsive and professional customer service" },
    { title: "Content Creation", icon: "✍️", description: "Compelling content for various platforms" },
    { title: "SEO", icon: "🔍", description: "Optimizing online presence for search engines" },
    { title: "Web Development", icon: "💻", description: "Custom web solutions for your business" }
  ];

  return (
    <Layout>
      <Head>
        <title>Find Your Perfect Virtual Assistant</title>
        <meta name="description" content="Connecting Businesses with Expert Virtual Assistants" />
      </Head>

      <Hero 
        title="Find Your Perfect Virtual Assistant"
        subtitle="Connecting Businesses with Expert Virtual Assistants to Streamline Operations and Boost Productivity"
        ctaPrimary={{text: "Hire a VA", href: "/hire-va"}}
        ctaSecondary={{text: "Become a VA", href: "/become-va"}}
      />

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Working with this VA agency has transformed our business operations. Highly recommended!"
              author="John Doe, CEO"
            />
            <TestimonialCard 
              quote="The VAs are highly skilled and professional. They've become an integral part of our team."
              author="Jane Smith, Marketing Director"
            />
            <TestimonialCard 
              quote="The onboarding process was smooth, and our VA was up to speed quickly. Great experience!"
              author="Mike Johnson, Small Business Owner"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

