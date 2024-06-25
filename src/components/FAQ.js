import { useState } from 'react';

export default function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button 
        className="w-full text-left text-xl text-blue-800 font-semibold focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{question}</span>
          <span className="text-2xl">{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}