
import Link from 'next/link'
import React from 'react'

const WatchYoutubeVideo = async({ params }: { params: Promise<{ videoId: string }>; }) => {
const resolvedParams = await (params)
const videoId = resolvedParams.videoId

    return (
        <div className='min-h-screen bg-gradient-to-b from-pink-300 via-purple-400 to-blue-500 text-white p-4 font-sans'>
          {/* Header */}
          <header className='flex justify-between items-center mb-8'>
            <Link
              href='/'
              className='text-lg font-bold text-white bg-yellow-500 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition'
            >
              Back to Home
            </Link>
            <h1 className='text-4xl font-extrabold text-yellow-300'>
              🎥 Kids &apos;s YouTube Zone
            </h1>
          </header>
    
          {/* Video Grid */}
       
            <div className='fixed inset-0 z-50 bg-black flex items-center justify-center'>
              <div className='relative w-full h-full'>
                <div className='absolute inset-0  mask mask-video w-full h-full' />
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&fs=1`}
                  allow='autoplay; fullscreen; encrypted-media'
                  allowFullScreen
                  height={"100%"}
                  width={"100%"}
                  title='Embedded YouTube Video'
               
                />
              </div>
             
            </div>
         
        </div>
      )
    }

export default WatchYoutubeVideo