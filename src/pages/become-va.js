import Layout from "@/components/Layout";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FAQ from '../components/VA-FAQ';

export default function BecomeVA() {
  const faqs = [
    {
      question: "How do I apply to become a VA?",
      answer: "You can apply by submitting the application form on our website. Make sure to provide all the required details and your resume."
    },
    {
      question: "What qualifications do I need?",
      answer: "We look for individuals with strong communication skills, reliability, and proficiency in the required tasks. Previous experience is a plus."
    },
    {
      question: "Is there any training provided?",
      answer: "Yes, we provide comprehensive training to ensure you are well-prepared for your role as a virtual assistant."
    },
    {
      question: "What kind of support will I receive?",
      answer: "You will have access to continuous support from our team, including resources and tools to help you succeed in your role."
    },
    {
      question: "Can I work part-time?",
      answer: "Yes, we offer both part-time and full-time opportunities depending on your availability and our clients' needs."
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Become a VA</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Learn about our application process and training programs to become a successful virtual assistant.
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">Application Process</h2>
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              Our application process is straightforward and designed to identify top talent. Here are the steps:
            </p>
            <ul className="list-decimal list-inside space-y-4 mt-4 text-lg text-gray-700">
              <li>Submit your application form with your details and experience.</li>
              <li>Attend an initial interview to assess your skills and fit for the role.</li>
              <li>Complete a skills assessment to demonstrate your proficiency.</li>
              <li>Join our training program if selected.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">Training Programs</h2>
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              Our training programs are designed to equip you with the skills needed to excel as a virtual assistant. The training includes:
            </p>
            <ul className="list-decimal list-inside space-y-4 mt-4 text-lg text-gray-700">
              <li>Comprehensive training on direct messaging best practices.</li>
              <li>Mastering social media inbox management and data privacy.</li>
              <li>Scheduling appointments and managing client communications.</li>
              <li>Improving productivity and time management.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">VA Portal</h2>
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              As a VA, you will have access to our secure portal where you can manage your profile, apply for jobs, and access training materials.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">Testimonials</h2>
          <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              Hear from some of our successful VAs about their experience with our program:
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="flex flex-col items-center max-w-sm p-4 bg-gray-100 rounded-lg shadow-lg mb-4">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-gray-400 mb-4" />
                <p className="text-lg text-gray-700 text-center">"I've learned so much through their training programs. I feel well-prepared and confident in my role."</p>
                <p className="text-lg font-semibold mt-4 text-gray-800">- Successful VA</p>
              </div>
              {/* Add more testimonials here if needed */}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">FAQs</h2>
          <div className="mb-6 bg-blue-50 p-6 rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}