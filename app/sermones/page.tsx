'use client'

import { useEffect, useState, useRef } from 'react'
import VideoPlayer from '@/components/sermons/VideoPlayer'
import VideoList from '@/components/sermons/VideoList'

interface Video {
    id: string
    title: string
    thumbnail: string
    publishedAt: string
    description: string
}

export default function SermonsPage() {
    const [videos, setVideos] = useState<Video[]>([])
    const [currentVideoId, setCurrentVideoId] = useState<string>('')
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const videoPlayerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch('/api/youtube', {
                    next: { revalidate: 3600 }
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch videos')
                }

                const data = await response.json()

                if (data.error) {
                    throw new Error(data.error)
                }

                if (!data.videos || data.videos.length === 0) {
                    setError('No videos found')
                    setLoading(false)
                    return
                }

                setVideos(data.videos)
                setCurrentVideoId(data.videos[0]?.id || '')
                setCurrentVideo(data.videos[0])
                setError(null)
            } catch (error) {
                console.error('Error fetching videos:', error)
                setError('Failed to load videos. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchVideos()
    }, [])

    const handleVideoSelect = (videoId: string) => {
        setCurrentVideoId(videoId)
        const selectedVideo = videos.find(v => v.id === videoId)
        if (selectedVideo) {
            setCurrentVideo(selectedVideo)
            videoPlayerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <div ref={videoPlayerRef}>
                {currentVideoId && <VideoPlayer videoId={currentVideoId} />}
                {currentVideo && (
                    <div className="max-w-7xl mx-auto mt-6 mb-12">
                        <h1 className="text-2xl font-bold mb-4">{currentVideo.title}</h1>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-600 whitespace-pre-wrap">
                                {currentVideo.description}
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Publicado el {new Date(currentVideo.publishedAt).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <VideoList
                videos={videos}
                currentVideoId={currentVideoId}
                onVideoSelect={handleVideoSelect}
            />
        </div>
    )
} 