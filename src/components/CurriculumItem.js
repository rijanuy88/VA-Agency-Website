// src/app/components/CurriculumItem.js
export default function CurriculumItem({ day, title, content }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{day}. {title}</h3>
      {content.map((section, index) => (
        <div key={index} className="mb-2">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{section.subtitle}</h4>
          {section.text.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-2">{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
