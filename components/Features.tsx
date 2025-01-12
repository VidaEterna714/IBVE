import { FC } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface ProgramItem {
  title: string;
  person: string;
  icon: React.ReactNode;
  image: string;
}

const ProgramItem: FC<ProgramItem> = ({ title, person, icon, image }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden rounded-lg shadow-lg group h-64 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
      <div className="relative z-10 p-6 h-full flex flex-col justify-between transition-all duration-300 group-hover:translate-y-[-20px]">
        <div className="text-white">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{person}</p>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      title: "Physical Campus",
      description: "Worship with us in person at one of our physical campuses.",
      action: "Find a location",
      icon: "🏢"
    },
    {
      title: "Live Streams",
      description: "eFam is our online community who stream church from wherever they are.",
      action: "Find a time",
      icon: "📺"
    },
    {
      title: "Watch Party",
      description: "Watch Parties are groups of eFam that stream the worship experience together.",
      action: "Find a watch party",
      icon: "👥"
    },
    {
      title: "Pop-Up",
      description: "A Pop-Up is where we bring church to different cities across the nation.",
      action: "Find a pop-up",
      icon: "📍"
    }
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Find the right experience for you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                {feature.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

