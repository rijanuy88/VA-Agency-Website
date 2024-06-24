// src/pages/comprehensive-training.js
import Step from '../app/components/Step';
import CurriculumItem from '../app/components/CurriculumItem';

export default function ComprehensiveTraining() {
  const steps = [
    {
      number: 1,
      title: "Initial Written Consultation",
      description: "Fill out a personalized questionnaire.",
      actions: [
        "Benefit: Communicate your specific needs and requirements efficiently.",
        "Value: Customized role alignment and a clear understanding of expectations and deliverables for both parties ensure the VA meets your exact needs and the training is relevant and impactful for your business."
      ]
    },
    {
      number: 2,
      title: "Candidate Selection",
      description: "Review pre-vetted candidates from our internal pool.",
      actions: [
        "Benefit: Access highly qualified VAs who have passed the assessment for foundational skills in DM appointment setting, ready to contribute.",
        "Value: Save time and effort by choosing from a pool of candidates who have undergone training from us firsthand."
      ]
    },
    // Add more steps as needed
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
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Comprehensive Training Program</h1>
        <p className="text-lg text-gray-700 mb-6">
          When you sign up, you get access to our meticulously vetted talent pool that has undergone comprehensive training designed to elevate their DM appointment-setting skills and efficiency.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Before we present the final candidates for your interview, we ensure they are specifically trained in:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Direct Messaging Best Practices: to handle direct messaging professionally and effectively.</li>
          <li>Managing Social Media Inboxes & Data Privacy: to master essential tools for managing social media inboxes while ensuring data privacy.</li>
          <li>Scheduling Appointments: to keep your investor calls coming in an organized and timely manner.</li>
          <li>Productivity and Time Management: to boost productivity with proven time management techniques.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Onboarding Plan</h2>
        {steps.map(step => (
          <Step key={step.number} {...step} />
        ))}

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum:</h2>
        {curriculum.map(item => (
          <CurriculumItem key={item.day} {...item} />
        ))}
      </div>
    </div>
  );
}
