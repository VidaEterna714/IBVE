import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Vida Eterna Logo" width={150} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
            <li><Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

