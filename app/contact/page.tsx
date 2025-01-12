import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ContactHero />
      <ContactInfo />
    </main>
  )
}

