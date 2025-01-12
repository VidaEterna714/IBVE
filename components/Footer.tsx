import { FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Iglesia Bautista Vida Eterna</h3>
            <p className="text-gray-400 mb-6">&quot;Una Iglesia Para Su Familia&quot;</p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@IBVE714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/ibve714" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span><a href="https://www.google.com/maps/place/Iglesia+Bautista+Vida+Eterna/@33.746492,-117.891116,15z/data=!4m2!3m1!1s0x0:0x1111111111111111?sa=X&ved=2ahUKEwjF497Y48L_AhXQ54sKHX68B18Q_BJ6BAhBEAU" target="_blank" rel="noopener noreferrer">929 S Birch St, Santa Ana, CA 92701</a> </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span><a href="tel:714-285-1774">Oficina: 714-285-1774</a></span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span><a href="mailto:vidaeterna714@outlook.com">vidaeterna714@outlook.com</a></span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Horarios</h3>
            <ul className="space-y-2">
              <li><strong>Domingo:</strong></li>
              <li>Escuela Dominical: 9:00 A.M.</li>
              <li>Servicio de Adoración: 10:30 A.M.</li>
              <li><strong>Miércoles:</strong></li>
              <li>Servicio de Oración: 7:00 P.M.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 Iglesia Bautista Vida Eterna. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

