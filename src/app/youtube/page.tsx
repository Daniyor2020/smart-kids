"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Predefined video list

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const video_link = `${baseUrl}/linksByUserId/`;
const users ={
  "Muslima": 2,
  "Muhammad": 1,
  "Sofia": 3
}

interface Video {
  user_id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const YoutubePage = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);

  const userName =
    typeof window !== "undefined" ? sessionStorage.getItem("userName") : null;

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

  useEffect(() => {
    const getVideos = async () => {
      const userName = sessionStorage.getItem("userName");
      console.log('userName:', userName);

      if (!userName) {
        return;
      }

      try {
        const response = await fetch(video_link+users[userName as keyof typeof users]);
        const data = await response.json();
        setVideos(data.links);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getVideos();
  }, []);

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
      {!videoId ? (
        <div>
          <p className='text-center mb-6 text-lg font-medium'>
            👩‍👩‍👧‍👦 Welcome {userName || "Guest"}! Select a video to play:
          </p>
          <SelectVideo videos={videos} handleVideoSelect={handleVideoSelect} />
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
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default YoutubePage;

interface SelectVideoProps {
  videos: Video[] | undefined;
  handleVideoSelect: (video: string) => void;
}
const SelectVideo = ({ videos, handleVideoSelect }: SelectVideoProps) => {
  if (videos?.length === 0) {
    return (
      <p className='text-center' key={"video"}>
        No videos found.
      </p>
    );
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {videos?.map((video: Video) => {
        if (typeof video.title === "string") {
          return (
            <div
              key={video.user_id}
              className='cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition'
              onClick={() => handleVideoSelect(video.url)}
            >
              <Image
                src={video?.thumbnail}
                alt={video?.title}
                className='w-full h-48 object-cover rounded-t-xl'
                width={200}
                height={300}
              />
              <div className='p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-center'>
                <p className='text-black font-semibold'>{video.title}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
