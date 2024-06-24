import Link from 'next/link'

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="space-x-4">
          <Link href={ctaPrimary.href} className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 inline-block">
            {ctaPrimary.text}
          </Link>
          <Link href={ctaSecondary.href} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300 inline-block mt-4 md:mt-0">
            {ctaSecondary.text}
          </Link>
        </div>
      </div>
    </div>
  )
}