import Step from '../components/Step';
import CurriculumItem from '../components/CurriculumItem';
import Layout from '@/components/Layout';
import FAQ from '../components/FAQ';
import Head from 'next/head';

export default function HireVA() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Fill out a personalized questionnaire to communicate your specific needs and requirements efficiently.",
    },
    {
      number: 2,
      title: "Needs Assessment",
      description: "We assess your needs to find the best match for you from our pre-vetted VA pool.",
    },
    {
      number: 3,
      title: "VA Matching",
      description: "We match you with highly qualified VAs who have passed our comprehensive training.",
    },
    {
      number: 4,
      title: "Onboarding and Training",
      description: "Your chosen VA goes through a detailed onboarding process and receives additional training specific to your needs.",
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "We provide continuous support to ensure the VA performs exceptionally and meets your expectations.",
    },
  ];

  const curriculum = [
    {
      day: "1.0",
      title: "Role Definition and Mastery (Day 1)",
      content: [
        {
          subtitle: "The Fundamentals",
          text: [
            "Dive deep into the core duties and critical skills that define a top-tier virtual assistant. Master the art of appointment setting and become the backbone of your client’s capital-raising efforts."
          ],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: "What is the process to hire a VA?",
      answer: "The process involves an initial consultation, needs assessment, VA matching, onboarding and training, and ongoing support."
    },
    {
      question: "How long does it take to match with a VA?",
      answer: "The matching process typically takes 3-5 business days, depending on the specific requirements and availability."
    },
    {
      question: "What qualifications do your VAs have?",
      answer: "Our VAs are pre-vetted and have gone through comprehensive training to ensure they meet our high standards."
    },
    {
      question: "Is there any trial period for the services?",
      answer: "Yes, we offer a trial period to ensure the VA meets your expectations and fits well with your business needs."
    },
    {
      question: "What if I am not satisfied with the VA?",
      answer: "If you are not satisfied with the VA, we will work with you to find a better match or address any concerns you have."
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-white shadow-md rounded-lg m-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Hire a Virtual Assistant</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Steps to Hire a VA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="step bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-700">{step.number}</div>
                <h3 className="text-xl font-semibold text-blue-800 mt-2">{step.title}</h3>
                <p className="text-gray-700 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((item, index) => (
              <div key={index} className="curriculum-item bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-800">{item.title}</h3>
                {item.content.map((content, idx) => (
                  <div key={idx} className="mt-4">
                    <h4 className="text-xl font-semibold text-blue-700">{content.subtitle}</h4>
                    <p className="text-gray-700">{content.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">FAQs</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}