// src/app/components/Step.js
export default function Step({ number, title, description, actions }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{number}. {title}</h3>
      <p className="text-lg text-gray-700 mb-2">{description}</p>
      {actions && actions.map((action, index) => (
        <p key={index} className="text-lg text-gray-700">{action}</p>
      ))}
    </div>
  );
}
