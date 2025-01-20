import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contactMap.jpeg"
          alt="Contacto"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hue-rotate-180 saturate-200"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">Contáctenos</h1>
        <p className="text-xl md:text-2xl text-gray-200 animate-fade-in-up animation-delay-200">Estamos aquí para servirle y responder a sus preguntas</p>
      </div>
    </section>
  )
}

