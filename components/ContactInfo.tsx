'use client'

import Image from 'next/image'
import { FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import Map from './Map'

const contactData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-500 mb-4" size={32} />,
    title: "Dirección",
    content: <p><a href="https://www.google.com/maps/place/Iglesia+Bautista+Vida+Eterna/@33.746492,-117.891116,15z/data=!4m2!3m1!1s0x0:0x1111111111111111?sa=X&ved=2ahUKEwjF497Y48L_AhXQ54sKHX68B18Q_BJ6BAhBEAU" target="_blank" rel="noopener noreferrer">929 S Birch St, Santa Ana, CA 92701</a></p>,
    image: "/contact/contact-marker.webp"
  },
  {
    icon: <FaPhone className="text-blue-500 mb-4" size={32} />,
    title: "Teléfonos",
    content: (
      <div>
        <p>Oficina: <a href="tel:714-285-1774">714-285-1774</a></p>
        <p>Pastor Noé Carrera: <a href="tel:714-335-4693">714-335-4693</a></p>
        <p>Hno. Raúl Castro: <a href="tel:714-791-0921">714-791-0921</a></p>
      </div>
    ),
    image: "/contact/phone.webp"
  },
  {
    icon: <FaEnvelope className="text-blue-500 mb-4" size={32} />,
    title: "Correo Electrónico",
    content: <p><a href="mailto:vidaeterna714@outlook.com">vidaeterna714@outlook.com</a></p>,
    image: "/contact/email.webp"
  },
  {
    icon: <FaClock className="text-blue-500 mb-4" size={32} />,
    title: "Horarios",
    content: (
      <div>
        <p><strong>Domingo:</strong> Escuela Dominical 9:00 A.M. | Servicio de Adoración 10:30 A.M.</p>
        <p><strong>Miércoles:</strong> Servicio de Oración 7:00 P.M.</p>
      </div>
    ),
    image: "/contact/time.webp"
  },
  {
    icon: (
      <div className="flex space-x-4 mb-4">
        <FaYoutube className="text-red-600" size={32} />
        <FaInstagram className="text-pink-600" size={32} />
        <FaFacebook className="text-blue-600" size={32} />
      </div>
    ),
    title: "Redes Sociales",
    content: (
      <div>
        <a href="https://www.youtube.com/@IBVE714" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 block mb-2">YouTube</a>
        <a href="https://www.instagram.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 block mb-2">Instagram</a>
        <a href="https://www.facebook.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 block">Facebook</a>
      </div>
    ),
    image: "/contact/social.webp"
  }
];

const ContactCard = ({ title, content, image }: { title: string, content: React.ReactNode, image: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg   group shadow-black hover:shadow-gray-500 transition-all duration-900">
      <div className="absolute inset-0 z-0">
        <Image
          className="saturate-200"
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 group-hover:from-black/70 group-hover:to-black/90 transition-all duration-300"></div>
      </div>
      <div className="relative z-10 p-6 mt-12 h-full flex flex-col justify-between transition-all duration-300 group-hover:translate-y-[-20px]">
        <div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="text-gray-300 opacity-0  group-hover:opacity-100 transition-opacity duration-300">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactInfo() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctenos</h2>
        <div className="grid grid-cols-1 filter  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactData.map((contact, index) => (
            <ContactCard
              key={index}
              title={contact.title}
              content={contact.content}
              image={contact.image}
            />
          ))}
        </div>
        <div className="flex justify-center items-center w-1/2 mx-auto">
        </div>

        <Map />
      </div>
    </section>
  )
}

