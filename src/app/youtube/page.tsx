"use client";

import React, { useState } from "react";
import { XCircle } from "lucide-react";
import Image from "next/image";

// Predefined video list

const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/watch?v=IpTZ1t7NJ9E",
    thumbnail: "https://img.youtube.com/vi/IpTZ1t7NJ9E/0.jpg",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.youtube.com/watch?v=_Cs9dXUZnsU",
    thumbnail: "https://img.youtube.com/vi/_Cs9dXUZnsU/0.jpg",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://www.youtube.com/watch?v=RYJ0uEEiS7w",
    thumbnail: "https://img.youtube.com/vi/RYJ0uEEiS7w/0.jpg",
  },
];

const muslimVideos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.youtube.com/watch?v=NulUsNMldgw",
    thumbnail: "https://img.youtube.com/vi/NulUsNMldgw/0.jpg",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.youtube.com/watch?v=X_ZJc9_n7TY&list=PLQCYtYck4nKzDCdcKCNyZa_TV_5lhoyEk",
    thumbnail: "https://img.youtube.com/vi/X_ZJc9_n7TY/0.jpg",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://www.youtube.com/watch?v=Hs0wjbxvCt0&list=PLQCYtYck4nKzDCdcKCNyZa_TV_5lhoyEk&index=2",
    thumbnail: "https://img.youtube.com/vi/Hs0wjbxvCt0/0.jpg",
  },
  {
    id: 4,
    title: "Video 4",
    url: "https://www.youtube.com/watch?v=YGshLFIGn0U&list=PLQCYtYck4nKzDCdcKCNyZa_TV_5lhoyEk&index=3",
    thumbnail: "https://img.youtube.com/vi/YGshLFIGn0U/0.jpg",
  },
];
const sofia = [
    {
        id: 1,
        title: "Video 1",
        url: "https://www.youtube.com/watch?v=vR4pVGNisZA",
        thumbnail: "https://img.youtube.com/vi/vR4pVGNisZA/0.jpg",
      },
      {
        id: 2,
        title: "Video 2",
        url: "https://www.youtube.com/watch?v=ZJEIKkPXirg",
        thumbnail: "https://img.youtube.com/vi/ZJEIKkPXirg/0.jpg",
      },
      {
        id: 3,
        title: "Video 3",
        url: "https://www.youtube.com/watch?v=Hmjhcsq-qMQ",
        thumbnail: "https://img.youtube.com/vi/Hmjhcsq-qMQ/0.jpg",
   
      },
]
const allVideos = {
    muslima : muslimVideos,
    muhammad : videos,
    sofia: sofia 
}
const YoutubePage = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const userName= sessionStorage.getItem("userName");
const currentVideos = React.useMemo(() => {
  if (userName === "Muhammad") {
    return allVideos.muhammad;
  } else if (userName === "Sofia") {
    return allVideos.sofia;
  } else if (userName === "Muslima") {
    return allVideos.muslima;
  }
}, [userName]);
console.log(currentVideos);

  // Extract video ID
  const extractYouTubeVideoId = (url: string): string | null => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // Handle video selection
  const handleVideoSelect = (url: string) => {
    const extractedVideoId = extractYouTubeVideoId(url);
    if (extractedVideoId) {
      setVideoId(extractedVideoId);
    }
  };

  // Reset player
  const resetVideo = () => {
    setVideoId(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-pink-300 via-purple-400 to-blue-500 text-white p-4 font-sans'>
    {/* Header */}
    <header className='flex justify-between items-center mb-8'>
      <a
        href='/'
        className='text-lg font-bold text-white bg-yellow-500 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition'
      >
        Back to Home
      </a>
      <h1 className='text-4xl font-extrabold text-yellow-300'>
        🎥 Kids &apos;s YouTube Zone
      </h1>
    </header>

    {/* Video Grid */}
    {!videoId ? (
      <div>
        <p className='text-center mb-6 text-lg font-medium'>
          👩‍👩‍👧‍👦 Welcome {userName || "Guest"}! Select a video to play:
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {currentVideos?.map((video) => (
            <div
              key={video.id}
              className='cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition'
              onClick={() => handleVideoSelect(video.url)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                className='w-full h-48 object-cover rounded-t-xl'
                width={200}
                height={300}
              />
              <div className='p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-center'>
                <p className='text-black font-semibold'>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
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
              onError={resetVideo}
            />
          </div>
          <button
            onClick={resetVideo}
            className='absolute top-4 right-4 bg-red-600 p-2 rounded-full hover:bg-red-700 transition'
          >
            <XCircle className='text-white' />
          </button>
        </div>
      )}
    </div>
  );
};

export default YoutubePage;
