import { SermonsProvider } from '@/contexts/SermonsContext'
import { Playbar } from '@/components/sermons/PlayBar'

export default function SermonsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SermonsProvider>
            <div className="flex flex-col h-screen bg-black mt-20">
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 overflow-auto pb-24">
                        {children}
                    </div>
                </div>
                <Playbar />
            </div>
        </SermonsProvider>
    )
}

