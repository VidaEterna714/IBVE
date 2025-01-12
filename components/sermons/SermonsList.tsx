'use client'

import { useContext } from 'react'
import { SermonCard } from '@/components/sermons/SermonCard'
import { SermonsContext } from '@/contexts/SermonsContext'

// Define the Sermon interface
export interface Sermon {
    id: number;
    title: string;
    preacher: string;
    date: string;
    duration: string;
    imageUrl: string;
    audioUrl: string;
}

// Define the props interface
interface SermonsListProps {
    sermons: Sermon[];
}

export function SermonsList({ sermons }: SermonsListProps) {
    const { setCurrentSermon, setIsPlaying, currentSermon, isPlaying } = useContext(SermonsContext)

    const handleSermonClick = (sermon: Sermon) => {
        if (currentSermon?.id === Number(sermon.id)) {
            setIsPlaying(!isPlaying)
        } else {
            setCurrentSermon(sermon)
            setIsPlaying(true)
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-6">
            {sermons.map((sermon) => (
                <SermonCard
                    key={sermon.id}
                    id={Number(sermon.id)}
                    title={sermon.title}
                    preacher={sermon.preacher}
                    date={sermon.date}
                    duration={sermon.duration}
                    imageUrl={sermon.imageUrl}
                    onClick={() => handleSermonClick(sermon)}
                />
            ))}
        </div>
    )
}

