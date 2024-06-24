import Head from 'next/head';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
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
        <title>Our Services | VA Agency</title>
        <meta name="description" content="Explore our range of virtual assistant services" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} icon={service.icon} description={service.description} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
