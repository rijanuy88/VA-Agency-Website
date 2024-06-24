// src/app/components/Introduction.js
export default function Introduction() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Us?</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-prose mx-auto">
        Our mission is to offer high-quality, eco-friendly products that are both practical and functional, without sacrificing affordability or convenience.
      </p>
      <div className="max-w-prose mx-auto">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
