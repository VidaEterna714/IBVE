'use client'

import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'

interface VideoPlayerProps {
    videoId: string
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    if (!isPlaying) {
        return (
            <div className="aspect-video w-full max-w-7xl mx-auto bg-black relative cursor-pointer group"
                onClick={() => setIsPlaying(true)}>
                <Image
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-transparent outline outline-2 outline-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaPlay className="text-white/40 text-4xl ml-2" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="aspect-video w-full max-w-7xl mx-auto bg-black">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
} 