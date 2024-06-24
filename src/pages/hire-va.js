// src/pages/hire-va.js
import Step from '../components/Step';
import CurriculumItem from '../components/CurriculumItem';
import Layout from '@/components/Layout';

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
          ]
        },
        {
          subtitle: "The Value You’ll Bring",
          text: [
            "Discover how your role as an appointment setter can significantly impact your client's business. Learn to articulate your value and become a key player in driving success."
          ]
        },
        {
          subtitle: "Targets You Need to Monitor to Deliver",
          text: [
            "Identify and understand the crucial metrics that will guide your performance. Learn to set and achieve targets that ensure you consistently deliver outstanding results."
          ]
        },
      ]
    },
    {
      day: "2.0",
      title: "Social Media for Investor Outreach (Day 1)",
      content: [
        {
          subtitle: "Discover the Game-Changers",
          text: [
            "Unveil the top social media platforms that yield the highest conversion rates for appointment setting and best practices for each platform to maximize your outreach."
          ]
        },
        {
          subtitle: "The Pieces Required from Your Client",
          text: [
            "Effectively have a stream of solid conversation starters, and therefore booked calls with compelling bios, optimized profiles for search, and consistent content posts scheduled."
          ]
        },
      ]
    },
    // Add more curriculum items as needed
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Hire a VA</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Here is the step-by-step guide on how to hire a virtual assistant through our platform.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Steps to Hire a VA</h2>
          {steps.map(step => (
            <Step key={step.number} {...step} />
          ))}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Training Program</h2>
          {curriculum.map(item => (
            <CurriculumItem key={item.day} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
