'use client'

import { useState, useEffect, useRef, useContext } from 'react'
import Image from 'next/image'
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart } from 'lucide-react'
import { SermonsContext } from '@/contexts/SermonsContext'

export function Playbar() {
    const { currentSermon, isPlaying, setIsPlaying } = useContext(SermonsContext)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const audioRef = useRef<HTMLAudioElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentSermon) {
            setIsPlaying(true)
            setCurrentTime(0)
            setDuration(0)
        }
    }, [currentSermon, setIsPlaying])

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(error => console.error("Playback failed", error))
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
            setDuration(audioRef.current.duration)
        }
    }

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressRef.current && audioRef.current) {
            const rect = progressRef.current.getBoundingClientRect()
            const percent = (e.clientX - rect.left) / rect.width
            audioRef.current.currentTime = percent * duration
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="h-24 bg-black border-t border-neutral-800 px-4 z-50">
            <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto">
                {/* Current Sermon Info */}
                <div className="flex items-center gap-4 min-w-[180px] max-w-[30%]">
                    {currentSermon ? (
                        <>
                            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                    src={currentSermon.imageUrl}
                                    alt={currentSermon.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-white hover:underline cursor-pointer truncate">
                                    {currentSermon.title}
                                </span>
                                <span className="text-xs text-gray-400 hover:underline cursor-pointer truncate">
                                    {currentSermon.preacher}
                                </span>
                            </div>
                            <button className="flex-shrink-0 text-gray-400 hover:text-white transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                        </>
                    ) : (
                        <div className="text-gray-400">No sermon selected</div>
                    )}
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center gap-2 max-w-[45%] w-full px-4">
                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Shuffle className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <SkipBack className="w-5 h-5" />
                        </button>
                        <button
                            className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
                            onClick={handlePlayPause}
                            disabled={!currentSermon}
                        >
                            {isPlaying ?
                                <Pause className="w-4 h-4 text-black" /> :
                                <Play className="w-4 h-4 text-black pl-0.5" />
                            }
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <SkipForward className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Repeat className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <span className="text-xs text-gray-400 w-10 text-right">
                            {formatTime(currentTime)}
                        </span>
                        <div
                            ref={progressRef}
                            className="flex-1 h-1 bg-neutral-600 rounded-full overflow-hidden group cursor-pointer"
                            onClick={handleProgressClick}
                        >
                            <div
                                className="h-full bg-white group-hover:bg-green-500 transition-colors"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                        </div>
                        <span className="text-xs text-gray-400 w-10">
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2 min-w-[180px] max-w-[30%] justify-end">
                    <Volume2 className="w-5 h-5 text-gray-400" />
                    <div className="w-24 h-1 bg-neutral-600 rounded-full overflow-hidden group relative">
                        <div
                            className="h-full bg-white group-hover:bg-green-500 transition-colors absolute top-0 left-0"
                            style={{ width: `${volume * 100}%` }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-full h-full opacity-0 cursor-pointer absolute top-0 left-0"
                        />
                    </div>
                </div>

                {currentSermon && (
                    <audio
                        ref={audioRef}
                        src={currentSermon.audioUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={() => setIsPlaying(false)}
                    />
                )}
            </div>
        </div>
    )
}

