export default function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-4 text-lg">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold text-gray-800">- {author}</p>
    </div>
  )
}