'use client'

import Image from 'next/image'
import { FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import ContactForm from './ContactForm'

const contactData = [
  {
    icon: <FaMapMarkerAlt className="text-blue-500 mb-4" size={32} />,
    title: "Dirección",
    content: <p>929 S Birch St, Santa Ana, CA 92701</p>,
    image: "/contact/contact-marker.webp"
  },
  {
    icon: <FaPhone className="text-blue-500 mb-4" size={32} />,
    title: "Teléfonos",
    content: (
      <div>
        <p>Oficina: 714-285-1774</p>
        <p>Pastor Noé Carrera: 714-335-4693</p>
        <p>Hno. Raúl Castro: 714-791-0921</p>
      </div>
    ),
    image: "/contact/phone.webp"
  },
  {
    icon: <FaEnvelope className="text-blue-500 mb-4" size={32} />,
    title: "Correo Electrónico",
    content: <p>vidaeterna714@outlook.com</p>,
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
    <div className="relative overflow-hidden rounded-lg shadow-md group shadow-black hover:shadow-gray-500 transition-all duration-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 group-hover:from-black/70 group-hover:to-black/90 transition-all duration-300"></div>
      </div>
      <div className="relative z-10 p-6 mt-12 h-full flex flex-col justify-between transition-all duration-300 group-hover:translate-y-[-20px]">
        <div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          <ContactForm />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Nuestra Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-lg shadow-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9557863437584!2d-117.87291068479242!3d33.74179798068894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9c5d9a2d3c3%3A0x8b9f4b3d4d4d4d4d!2s929%20S%20Birch%20St%2C%20Santa%20Ana%2C%20CA%2092701!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

