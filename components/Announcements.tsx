import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const AnnouncementCard = ({ title, content, image }: { title: string, content: string, image: string }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden rounded-lg shadow-lg group h-full transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
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
      <div className="relative  z-10 p-6 h-full bg-black/40 transition-all duration-300 group-hover:translate-y-[-20px]">
        <div className="text-white absolute bottom-10 right-0 mx-auto left-0 w-1/2 text-center">

          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default function Announcements() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Anuncios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
          <AnnouncementCard

            title="Preguntas Bíblicas"
            content="Hemos puesto una caja de preguntas bíblicas a la entrada del santuario, en una mesa roja, para que deposite cualquier pregunta concerniente a la Palabra de Dios."
            image="https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <AnnouncementCard

            title="Ofrendas y Diezmos"
            content="Para depositar tu ofrenda o diezmo vía Zelle, favor de usar este correo electrónico: finanzas_vidaeterna@yahoo.com"
            image="https://images.unsplash.com/photo-1503518360324-48ac3ddb86db?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  )
}

