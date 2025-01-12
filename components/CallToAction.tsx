import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Eternal Journey?</h2>
        <p className="text-xl mb-8">Join Vida Eterna today and unlock the secrets of timeless existence.</p>
        <Link href="/sign-up" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Start Now
        </Link>
      </div>
    </section>
  )
}

