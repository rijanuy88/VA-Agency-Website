import Head from 'next/head';
import Layout from '../components/Layout';

export default function CaseStudies() {
  const caseStudies = [
    { title: "Boosting Productivity for Tech Startup", client: "TechCo", result: "50% increase in task completion" },
    { title: "Streamlining Customer Support", client: "E-commerce Giant", result: "24-hour response time achieved" },
    { title: "Scaling Content Creation", client: "Marketing Agency", result: "300% increase in content output" }
  ];

  return (
    <Layout>
      <Head>
        <title>Case Studies | VA Agency</title>
        <meta name="description" content="Real-world success stories of our virtual assistants" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{study.title}</h2>
              <p className="text-gray-600 mb-2">Client: {study.client}</p>
              <p className="text-green-600 font-semibold">Result: {study.result}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
