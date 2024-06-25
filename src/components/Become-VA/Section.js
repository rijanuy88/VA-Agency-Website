export default function Section({ title, description, children }) {
	return (
		<div className="mb-6 bg-white p-6 rounded-lg shadow-md">
			<h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>
			{description && <p className="text-lg text-gray-700">{description}</p>}
			{children}
		</div>
	);
}
