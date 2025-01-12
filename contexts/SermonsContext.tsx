'use client'

import { createContext, useState, ReactNode } from 'react'

type Sermon = {
    id: number
    title: string
    preacher: string
    audioUrl: string
    imageUrl: string
}

type SermonsContextType = {
    currentSermon: Sermon | null
    setCurrentSermon: (sermon: Sermon | null) => void
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
}

export const SermonsContext = createContext<SermonsContextType>({
    currentSermon: null,
    setCurrentSermon: () => { },
    isPlaying: false,
    setIsPlaying: () => { },
})

export function SermonsProvider({ children }: { children: ReactNode }) {
    const [currentSermon, setCurrentSermon] = useState<Sermon | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <SermonsContext.Provider value={{ currentSermon, setCurrentSermon, isPlaying, setIsPlaying }}>
            {children}
        </SermonsContext.Provider>
    )
}

