import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TestimonialCard({ quote, author }) {
	return (
		<div className="flex flex-col items-center max-w-sm p-4 bg-gray-100 rounded-lg shadow-lg mb-4">
			<FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-gray-400 mb-4" />
			<p className="text-lg text-gray-700 text-center">&ldquo;{quote}&rdquo;</p>
			<p className="text-lg font-semibold mt-4 text-gray-800">- {author}</p>
		</div>
	);
}
