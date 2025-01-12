'use client'

import { useContext, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'
import { SermonsContext } from '@/contexts/SermonsContext'

interface SermonCardProps {
    id: number
    title: string
    preacher: string
    date: string
    duration: string
    imageUrl: string
    onClick: () => void
}

const WaveformVisualizer = ({ isActive, isPlaying }: { isActive: boolean, isPlaying: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | null>(null)
    const lastUpdateTimeRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        const bars = 10
        const barWidth = canvas.width / bars
        const animate = (timestamp: number) => {
            if (timestamp - lastUpdateTimeRef.current > 150) { // Slow down animation
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                for (let i = 0; i < bars; i++) {
                    const height = isPlaying ? Math.random() * canvas.height : 2
                    ctx.fillStyle = isActive ? '#1DB954' : '#ffffff'
                    ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 1, height)
                }
                lastUpdateTimeRef.current = timestamp
            }
            animationRef.current = requestAnimationFrame(animate)
        }

        if (isPlaying && isActive) {
            animate(0)
        } else {
            cancelAnimationFrame(animationRef.current!)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < bars; i++) {
                ctx.fillStyle = isActive ? '#1DB954' : '#ffffff'
                ctx.fillRect(i * barWidth, canvas.height - 2, barWidth - 1, 2)
            }
        }

        return () => cancelAnimationFrame(animationRef.current!)
    }, [isActive, isPlaying])

    return <canvas ref={canvasRef} width={50} height={20} className="absolute bottom-2 left-2" />
}

export function SermonCard({ id, title, preacher, date, duration, imageUrl, onClick }: SermonCardProps) {
    const { currentSermon, isPlaying } = useContext(SermonsContext)
    const isActive = currentSermon?.id === id

    return (
        <div
            className="bg-neutral-800/50 p-4 rounded-lg hover:bg-neutral-800 transition-all duration-300 group cursor-pointer"
            onClick={onClick}
        >
            <div className="relative aspect-square mb-4 rounded-md overflow-hidden shadow-lg">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-100 opacity-0" />
                <button
                    className="absolute right-2 bottom-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-green-400"
                    onClick={(e) => {
                        e.stopPropagation()
                        onClick()
                    }}
                >
                    {isActive && isPlaying ? (
                        <Pause className="w-6 h-6 text-black" />
                    ) : (
                        <Play className="w-6 h-6 text-black pl-1" />
                    )}
                </button>
                <WaveformVisualizer isActive={isActive} isPlaying={isActive && isPlaying} />
            </div>
            <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{preacher}</p>
            <div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
                <span>{date}</span>
                <span>•</span>
                <span>{duration}</span>
            </div>
        </div>
    )
}

