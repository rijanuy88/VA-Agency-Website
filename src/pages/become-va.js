// import { useState } from 'react';
// import Head from 'next/head';
// import Layout from '../components/Layout';

// export default function BecomeVA() {
//   const [step, setStep] = useState(1);

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return <InitialConsultation onNext={() => setStep(2)} />;
//       case 2:
//         return <SkillsAssessment onNext={() => setStep(3)} />;
//       case 3:
//         return <TrainingProgram onNext={() => setStep(4)} />;
//       case 4:
//         return <FinalAssessment onComplete={() => alert("Application completed!")} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Layout>
//       <Head>
//         <title>Become a Virtual Assistant</title>
//         <meta name="description" content="Join our team of expert virtual assistants" />
//       </Head>
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-3xl font-bold mb-8">Become a Virtual Assistant</h1>
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

// function SkillsAssessment({ onNext }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Skills Assessment</h2>
//       {/* Add assessment fields here */}
//       <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </div>
//   );
// }

// function TrainingProgram({ onNext }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Training Program</h2>
//       {/* Add training program details here */}
//       <button onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Next
//       </button>
//     </div>
//   );
// }

// function FinalAssessment({ onComplete }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Final Assessment</h2>
//       {/* Add final assessment details here */}
//       <button onClick={onComplete} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Complete
//       </button>
//     </div>
//   );
// }


// // src/pages/become-va.js
// export default function BecomeVA() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">Become a VA</h1>
//       <p className="text-lg text-gray-700 mb-6 text-center max-w-prose">
//         Learn about our application process and training programs to become a successful virtual assistant.
//       </p>
//       <ul className="list-decimal list-inside space-y-2">
//         <li>Application Process</li>
//         <li>Training Programs</li>
//         <li>VA Portal</li>
//         <li>Testimonials</li>
//       </ul>
//     </div>
//   );
// }


// src/pages/become-va.js
export default function BecomeVA() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Become a VA</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-prose">
        Learn about our application process and training programs to become a successful virtual assistant.
      </p>
      <ul className="list-decimal list-inside space-y-4 text-left max-w-prose">
        <li>Application Process</li>
        <li>Training Programs</li>
        <li>VA Portal</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}
