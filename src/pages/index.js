// // src/pages/index.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserTie, faHandsHelping, faHeadset, faPenNib, faLaptopCode, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';
// import HeroSection from '../components/HeroSection';
// import Introduction from '../components/Introduction';
// import AboutUs from '../components/AboutUs';
// import Services from '../components/Services';
// import ComprehensiveTraining from '../components/ComprehensiveTraining';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <HeroSection />

//       <Introduction />

//       <AboutUs />

//       <Services />

//       <ComprehensiveTraining />

//       {/* Hire a VA Section */}
//       <section className="py-16 px-4 text-center bg-white">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Hire a VA</h2>
//         <p className="text-lg text-gray-700 mb-6 max-w-prose mx-auto">
//           Here is the step-by-step guide on how to hire a virtual assistant through our platform.
//         </p>
//         <div className="max-w-4xl mx-auto text-left">
//           <ul className="list-decimal list-inside space-y-4">
//             <li className="text-lg text-gray-700">Initial Consultation</li>
//             <li className="text-lg text-gray-700">Needs Assessment</li>
//             <li className="text-lg text-gray-700">VA Matching</li>
//             <li className="text-lg text-gray-700">Onboarding and Training</li>
//             <li className="text-lg text-gray-700">Ongoing Support</li>
//           </ul>
//         </div>
//       </section>

//       {/* Become a VA Section */}
//       <section className="py-16 px-4 bg-gray-50 text-center">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Become a VA</h2>
//         <p className="text-lg text-gray-700 mb-6 max-w-prose mx-auto">
//           Learn about our application process and training programs to become a successful virtual assistant.
//         </p>
//         <div className="max-w-4xl mx-auto text-left">
//           <ul className="list-decimal list-inside space-y-4">
//             <li className="text-lg text-gray-700">Application Process</li>
//             <li className="text-lg text-gray-700">Training Programs</li>
//             <li className="text-lg text-gray-700">VA Portal</li>
//             <li className="text-lg text-gray-700">Testimonials</li>
//           </ul>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 px-4 bg-white text-center">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h2>
//         <div className="max-w-4xl mx-auto">
//           <div className="flex flex-wrap justify-center space-x-4">
//             <div className="flex flex-col items-center max-w-sm p-4 bg-gray-100 rounded-lg shadow-lg mb-4">
//               <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-gray-400 mb-4" />
//               <p className="text-lg text-gray-700">"This service has been a game-changer for our business. The VAs are top-notch and very professional."</p>
//               <p className="text-lg font-semibold mt-4 text-gray-800">- Happy Client</p>
//             </div>
//             <div className="flex flex-col items-center max-w-sm p-4 bg-gray-100 rounded-lg shadow-lg mb-4">
//               <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-gray-400 mb-4" />
//               <p className="text-lg text-gray-700">"I've learned so much through their training programs. I feel well-prepared and confident in my role."</p>
//               <p className="text-lg font-semibold mt-4 text-gray-800">- Successful VA</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/globals.css'; // Import Tailwind CSS

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

