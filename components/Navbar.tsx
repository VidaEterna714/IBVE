'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white text-black backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center bg-white rounded-lg h-16 w-40">
              <Image src="/logo.png" alt="Iglesia Bautista Vida Eterna Logo" width={200} height={2000} />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-600 transition duration-300">Inicio</Link>
              <Link href="/sermones" className="hover:text-blue-600 transition duration-300">Sermones</Link>
              <Link href="/contact" className="hover:text-blue-600 transition duration-300">Contacto</Link>
            </div>
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>

          <div className="mt-16 flex flex-col space-y-4 text-black">
            <Link
              href="/"
              className="text-lg py-2 hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/sermones"
              className="text-lg py-2 hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sermones
            </Link>
            <Link
              href="/contact"
              className="text-lg py-2 hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

