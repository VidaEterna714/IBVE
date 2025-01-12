import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Life Explorer",
    quote: "Vida Eterna has opened my eyes to the infinite possibilities of existence.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Eternal Learner",
    quote: "The knowledge I've gained through Vida Eterna is truly timeless.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Rodriguez",
    role: "Wellness Enthusiast",
    quote: "I've never felt more alive and vibrant since joining Vida Eterna.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

