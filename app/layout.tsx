import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iglesia Bautista Vida Eterna',
  description: "Una Iglesia Para Su Familia Descubre Esperanza y Comunidad ¿Buscas un lugar donde pertenecer? Iglesia Bautista Vida Eterna es más que una iglesia: ¡es una familia! Ubicada en el corazón de Santa Ana, somos una comunidad vibrante comprometida a compartir el amor de Dios y construir relaciones duraderas.",
  openGraph: {
    images: [
      {
        url: '/hero/hero1.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/hero/hero2.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

