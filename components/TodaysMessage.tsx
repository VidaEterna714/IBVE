import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TodaysMessage() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Mensaje de Hoy</h2>
        <div className={`relative overflow-hidden rounded-lg shadow-lg group transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1735597693189-9ba81b5bbc83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mensaje de Hoy"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 group-hover:from-black/70 group-hover:to-black/90 transition-all duration-300"></div>
          </div>
          <div className="relative z-10 p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Pastor Braulio Saravia: El Arte Del Contentamiento</h3>
            <p className="text-xl mb-6">Filipenses 4:11-13</p>
            <div className="bg-white text-blue-600 p-6 rounded-lg inline-block shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Versículo de la Semana</h4>
              <p className="italic text-lg mb-2">&quot;De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas.&quot;</p>
              <p className="text-gray-600">2 Corintios 5:17</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

