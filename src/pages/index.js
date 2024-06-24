// import Head from 'next/head';
// import Layout from '../components/Layout';
// import Hero from '../components/Hero';
// import ServiceCard from '../components/ServiceCard';
// import TestimonialCard from '../components/TestimonialCard';
// import '../styles/globals.css'; // Import Tailwind CSS

// export default function Home() {
//   const services = [
//     { title: "Administrative Support", icon: "📁", description: "Efficient management of day-to-day tasks" },
//     { title: "Social Media Management", icon: "📱", description: "Engaging content and community management" },
//     { title: "Customer Support", icon: "🤝", description: "Responsive and professional customer service" },
//     { title: "Content Creation", icon: "✍️", description: "Compelling content for various platforms" },
//     { title: "SEO", icon: "🔍", description: "Optimizing online presence for search engines" },
//     { title: "Web Development", icon: "💻", description: "Custom web solutions for your business" }
//   ];

//   return (
//     <Layout>
//       <Head>
//         <title>Find Your Perfect Virtual Assistant</title>
//         <meta name="description" content="Connecting Businesses with Expert Virtual Assistants" />
//       </Head>

//       <Hero 
//         title="Find Your Perfect Virtual Assistant"
//         subtitle="Connecting Businesses with Expert Virtual Assistants to Streamline Operations and Boost Productivity"
//         ctaPrimary={{text: "Hire a VA", href: "/hire-va"}}
//         ctaSecondary={{text: "Become a VA", href: "/become-va"}}
//       />

//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <ServiceCard key={index} title={service.title} icon={service.icon} description={service.description} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Clients Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <TestimonialCard 
//               quote="Working with this VA agency has transformed our business operations. Highly recommended!"
//               author="John Doe, CEO"
//             />
//             <TestimonialCard 
//               quote="The VAs are highly skilled and professional. They've become an integral part of our team."
//               author="Jane Smith, Marketing Director"
//             />
//             <TestimonialCard 
//               quote="The onboarding process was smooth, and our VA was up to speed quickly. Great experience!"
//               author="Mike Johnson, Small Business Owner"
//             />
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }


// // src/pages/index.js
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to VA Agency</h1>
//       <p className="text-lg text-gray-700 mb-6 text-center">
//         Connecting businesses with expert virtual assistants
//       </p>
//       <div className="space-x-4">
//         <a
//           href="/hire-va"
//           className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-transform"
//         >
//           Hire a VA
//         </a>
//         <a
//           href="/become-va"
//           className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-transform"
//         >
//           Become a VA
//         </a>
//       </div>
//     </div>
//   );
// }


// src/pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Virtual Assistant</h1>
          <p className="text-xl mb-6">Connecting businesses with expert virtual assistants</p>
          <div className="space-x-4">
            <a
              href="/hire-va"
              className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-transform"
            >
              Hire a VA
            </a>
            <a
              href="/become-va"
              className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-transform"
            >
              Become a VA
            </a>
          </div>
        </div>
      </div>
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-prose mx-auto">
          Our goal is to offer high-quality, eco-friendly products that are both practical and functional, without sacrificing affordability or convenience.
        </p>
      </section>
    </div>
  );
}
