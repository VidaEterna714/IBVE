'use client'

import Image from 'next/image'

interface Video {
    id: string
    title: string
    thumbnail: string
    publishedAt: string
}

interface VideoListProps {
    videos: Video[]
    currentVideoId: string
    onVideoSelect: (videoId: string) => void
}

export default function VideoList({ videos, currentVideoId, onVideoSelect }: VideoListProps) {
    const filteredVideos = videos.filter(video => video.id !== currentVideoId)

    if (filteredVideos.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">No hay más videos disponibles</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {filteredVideos.map((video) => (
                <div
                    key={video.id}
                    className="cursor-pointer group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    onClick={() => onVideoSelect(video.id)}
                >
                    <div className="relative aspect-video">
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover rounded-t-lg group-hover:opacity-75 transition-opacity"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                            {video.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            {new Date(video.publishedAt).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
} 