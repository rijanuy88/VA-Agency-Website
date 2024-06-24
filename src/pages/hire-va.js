// import { useState } from 'react';
// import Head from 'next/head';
// import Layout from '../components/Layout';

// export default function HireVA() {
//   const [step, setStep] = useState(1);

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return <InitialConsultation onNext={() => setStep(2)} />;
//       case 2:
//         return <NeedsAssessment onNext={() => setStep(3)} />;
//       case 3:
//         return <VAMatching onNext={() => setStep(4)} />;
//       case 4:
//         return <Onboarding onComplete={() => alert("VA hiring process completed!")} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout>
//       <Head>
//         <title>Hire a Virtual Assistant | VA Agency</title>
//         <meta name="description" content="Find the perfect virtual assistant for your business" />
//       </Head>
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl font-bold mb-8">Hire a Virtual Assistant</h1>
//         {renderStep()}
//       </div>
//     </Layout>
//   );
// }

// function InitialConsultation({ onNext }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Initial Consultation</h2>
//       {/* Add form fields here */}
//       <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </div>
//   );
// }

// function NeedsAssessment({ onNext }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Needs Assessment</h2>
//       {/* Add needs assessment fields here */}
//       <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </div>
//   );
// }

// function VAMatching({ onNext }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">VA Matching</h2>
//       {/* Add VA matching process details here */}
//       <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </div>
//   );
// }

// function Onboarding({ onComplete }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Onboarding</h2>
//       {/* Add onboarding process details here */}
//       <button onClick={onComplete} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Complete
//       </button>
//     </div>
//   );
// }


// // src/pages/hire-va.js
// export default function HireVA() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">Hire a VA</h1>
//       <p className="text-lg text-gray-700 mb-6 text-center max-w-prose">
//         Here is the step-by-step guide on how to hire a virtual assistant through our platform.
//       </p>
//       <ul className="list-decimal list-inside space-y-2">
//         <li>Initial Consultation</li>
//         <li>Needs Assessment</li>
//         <li>VA Matching</li>
//         <li>Onboarding and Training</li>
//         <li>Ongoing Support</li>
//       </ul>
//     </div>
//   );
// }



// src/pages/hire-va.js
export default function HireVA() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Hire a VA</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-prose">
        Here is the step-by-step guide on how to hire a virtual assistant through our platform.
      </p>
      <ul className="list-decimal list-inside space-y-4 text-left max-w-prose">
        <li>Initial Consultation</li>
        <li>Needs Assessment</li>
        <li>VA Matching</li>
        <li>Onboarding and Training</li>
        <li>Ongoing Support</li>
      </ul>
    </div>
  );
}
