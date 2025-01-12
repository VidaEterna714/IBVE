import { Sermon, SermonsList } from '@/components/sermons/SermonsList'

const sermons = [
    {
        id: 1,
        title: 'El Arte del Contentamiento',
        preacher: 'Pastor Braulio Saravia',
        date: '21 Mayo 2023',
        duration: '45:30',
        imageUrl: 'https://images.unsplash.com/photo-1602525662744-33cce0a56d13?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
        id: 2,
        title: 'La Importancia de la Oración',
        preacher: 'Pastor Noé Carrera',
        date: '14 Mayo 2023',
        duration: '38:15',
        imageUrl: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
        id: 3,
        title: 'El Poder del Perdón',
        preacher: 'Pastor Braulio Saravia',
        date: '7 Mayo 2023',
        duration: '42:00',
        imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
        id: 4,
        title: 'Viviendo en Fe',
        preacher: 'Pastor Noé Carrera',
        date: '30 Abril 2023',
        duration: '39:45',
        imageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5c0a3ca8?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
        id: 5,
        title: 'El Camino de la Sabiduría',
        preacher: 'Pastor Braulio Saravia',
        date: '23 Abril 2023',
        duration: '41:20',
        imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
    },
    {
        id: 6,
        title: 'La Gracia de Dios',
        preacher: 'Pastor Noé Carrera',
        date: '16 Abril 2023',
        duration: '37:50',
        imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=800&fit=crop',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
    }
]

export default function SermonsPage() {
    return (
        <div className="p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-4">Sermones Destacados</h1>
                <p className="text-gray-400">Escucha los mensajes más recientes de nuestra iglesia</p>
            </header>
            <SermonsList sermons={sermons as Sermon[]} />
        </div>
    )
}

