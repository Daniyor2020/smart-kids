"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Predefined video list

const video_link  ='https://blog-dob1.onrender.com//linksByUserId/1'

const videos = [
    {
      id: 1,
      title: "THE CREAKING - Villager vs Pillager vs Creaking Army of the Pale Garden (Minecraft Movie Animation)",
      url: "https://www.youtube.com/watch?v=geMncXjwJoY",
      thumbnail: "https://img.youtube.com/vi/geMncXjwJoY/0.jpg",
    },
    {
      id: 2,
      title: "Warden Origin | FULL MOVIE | MINECRAFT ANIMATION",
      url: "https://www.youtube.com/watch?v=OVUBtJVU-Ic",
      thumbnail: "https://img.youtube.com/vi/OVUBtJVU-Ic/0.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/watch?v=xJ5w5WQBhO0",
      thumbnail: "https://img.youtube.com/vi/xJ5w5WQBhO0/0.jpg",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/watch?v=pw17M-fQMXo",
      thumbnail: "https://img.youtube.com/vi/pw17M-fQMXo/0.jpg",
    },
    {
      id: 5,
      title:
        "Multiplication - Level 10 | Learn to Count - 123 | Maths Cartoons for Kids | @Numberblocks",
      url: "https://www.youtube.com/watch?v=ejE-7bWz1Ho",
      thumbnail: "https://img.youtube.com/vi/ejE-7bWz1Ho/0.jpg",
    },
    {
      id: 6,
      title: "Minecraft's ",
      url: "https://www.youtube.com/watch?v=GxLClggK-hQ",
      thumbnail: "https://img.youtube.com/vi/GxLClggK-hQ/0.jpg",
    },
   
    {
      id: 7,
      title: "I Found Minecraft's RAREST Mobs in 24 Hours!",
      url: "https://www.youtube.com/watch?v=0UFYOvp2Ke0",
      thumbnail: "https://img.youtube.com/vi/0UFYOvp2Ke0/0.jpg",
    },
    {
      id: 8,
      title: "The Story Of Prophet Ibrahim (AS) | Animated Full Movie",
      url: "https://www.youtube.com/watch?v=wuNAlw5kmW8",
      thumbnail: "https://img.youtube.com/vi/wuNAlw5kmW8/0.jpg",
    },
    {
      id: 9,
      title: "Season 3 All Episode - Minecraft Animation",
      url: "https://www.youtube.com/watch?v=X09yxFuKLAs",
      thumbnail: "https://img.youtube.com/vi/X09yxFuKLAs/0.jpg",
    }

  ];

const muslimVideos = [
  {
    id: 1,
    title: "1 Hour Compilation (Bismillah, Alhamdulillah, Etc) | Omar & Hana English",
    url: "https://www.youtube.com/watch?v=wW5NwX_Ex5E",
    thumbnail: "https://img.youtube.com/vi/wW5NwX_Ex5E/0.jpg",
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
  {
    id: 5,
    title: "Yajooj Majooj | Dhul Qarnayn | Islamic stories for kids | Stories from Quran and Hadith",
    url: "https://www.youtube.com/watch?v=-Ct8qZdrr-s",
    thumbnail: "https://img.youtube.com/vi/-Ct8qZdrr-s/0.jpg",
  },
  {
    id: 6,
    title: "Scared of Maths? | Why Do People Get So Anxious About Math? | Fear of Mathematics | Dr Binocs Shows",
    url: "https://www.youtube.com/watch?v=U0Pq7xcqWnM&t=10s",
    thumbnail: "https://img.youtube.com/vi/VG3arGjg0Hk/0.jpg",

  },
  {
    id: 7,
    title: "Yajooj Majooj | Dhul Qarnayn | Islamic stories for kids | Stories from Quran and Hadith",
    url: "https://www.youtube.com/watch?v=U0Pq7xcqWnM",
    thumbnail: "https://img.youtube.com/vi/U0Pq7xcqWnM/0.jpg",
  },
  {
    id: 8,
    title: "The Story of Martin Luther King Jr. | In Memory of Greatest Civil Rights Leader | Dr. Binocs Show",
    url: "https://www.youtube.com/watch?v=snYrHgoGJ5A",
    thumbnail: "https://img.youtube.com/vi/snYrHgoGJ5A/0.jpg",
  },
  {
    id: 9,
    title: "The Story of Martin Luther King Jr. | In Memory of Greatest Civil Rights Leader | Dr. Binocs Show",
    url: "https://www.youtube.com/watch?v=do1lP632bY8&list=PLGQ5yMe4AdXoGmMG8n9l-ybgPMooQKaAd&index=2",
    thumbnail: "https://img.youtube.com/vi/do1lP632bY8/0.jpg",
  }
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
      {
        id: 4,
        title: "I'm The Best Muslim - Season 1 - World's Best Islamic Education Series",
        url: "https://www.youtube.com/watch?v=lGind6Cn0Tw",
        thumbnail: "https://img.youtube.com/vi/lGind6Cn0Tw/0.jpg",
   
      },
      {
        id: 5,
        title: "LETS LEARN WITH LAITH & LAYLA - COMPILATION",
        url: "https://www.youtube.com/watch?v=gKcwP9udO_E",
        thumbnail: "https://img.youtube.com/vi/gKcwP9udO_E/0.jpg",
   
      },
      {
        id: 6,
        title: "Video 6",
        url: "https://www.youtube.com/watch?v=Hmjhcsq-qMQ",
        thumbnail: "https://img.youtube.com/vi/Hmjhcsq-qMQ/0.jpg",
   
      },
      {
        id: 7,
        title: "Video 7",
        url: "https://www.youtube.com/watch?v=Hmjhcsq-qMQ",
        thumbnail: "https://img.youtube.com/vi/Hmjhcsq-qMQ/0.jpg",
      },
      {
        id: 8,
        title: "The Makers of Omar & Hana - Islamic Stories Mina Mila - We Are Twins - Muslim Siblings | Durioo",
        url: "https://www.youtube.com/watch?v=9kVFakzzXe8",
        thumbnail: "https://img.youtube.com/vi/9kVFakzzXe8/0.jpg",
      },

]
const allVideos = {
    muslima : [],
    muhammad : [],
    sofia: [] 
}
const YoutubePage = () => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const userName = typeof window !== "undefined" ? sessionStorage.getItem("userName") : null;
const currentVideos = React.useMemo(() => {
  if (userName === "Muhammad") {
    return allVideos.muhammad;
  } else if (userName === "Sofia") {
    return allVideos.sofia;
  } else if (userName === "Muslima") {
    return allVideos.muslima;
  }
}, [userName]);

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
   try {
     const response = await fetch(video_link);
     const data = await response.json();
     console.log('videos from api',data);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 }

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
        <SelectVideo videos={currentVideos} handleVideoSelect={handleVideoSelect}/>
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


const SelectVideo = ({videos,handleVideoSelect}:any) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

    
    {videos?.map((video:unknown) =>{ 
        if(videos.length === 0) {
          return (
            <p className='text-center' key={'video'}>No videos found.</p>
          )
        }
      if (typeof video === "string") {
        return (
          <div
            key={video}
            className='cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition'
            onClick={() => handleVideoSelect(video)}
          >
            <Image
              src={video}
              alt={video}
              className='w-full h-48 object-cover rounded-t-xl'
              width={200}
              height={300}
            />
            <div className='p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-center'>
              <p className='text-black font-semibold'>{video}</p>
            </div>
          </div>
        );
      }
    })}
    </div>
  )
}