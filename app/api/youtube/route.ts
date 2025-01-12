import { NextResponse } from 'next/server'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = 'UCJRXRY-Lj2VKhCi1-VWcGoA'

interface YouTubeItem {
    id: { videoId: string };
    snippet: {
        title: string;
        thumbnails: { medium: { url: string } };
        publishedAt: string;
        description: string;
    };
}
interface YouTubeResponse {
    items: YouTubeItem[];
}

export async function GET() {
    if (!YOUTUBE_API_KEY) {
        return NextResponse.json({ error: 'YouTube API key is not configured' }, { status: 500 })
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20&type=video`,
            {
                next: { revalidate: 3600 } // Revalidate every hour
            }
        )

        if (!response.ok) {
            throw new Error('Failed to fetch videos')
        }

        const data = await response.json() as YouTubeResponse;


        if (!data.items) {
            return NextResponse.json({ videos: [] })
        }

        const videos = data.items.map((item: YouTubeItem) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            publishedAt: item.snippet.publishedAt,
            description: item.snippet.description,
        }))


        return NextResponse.json({ videos })
    } catch (error) {
        console.error('YouTube API Error:', error)
        return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 })
    }
} 