'use client'

import Hero from '@/components/Hero'
import WelcomeSection from '@/components/WelcomeSection'
import MinistryGrid from '@/components/MinistryGrid'
import ServiceTimes from '@/components/ServiceTimes'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-20">
        <Hero />
      </div>
      <WelcomeSection />
      <MinistryGrid />
      <ServiceTimes />
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Conectate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Síguenos en las redes sociales
          </p>
          <div className="mt-12 hover:scale-110 transition-all duration-300 ">
            <div className="flex justify-center items-center space-x-4">
              <a href="https://www.youtube.com/@IBVE714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

