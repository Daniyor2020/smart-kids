"use client"
import React, { useState } from 'react';

interface Video {
  url: string;
  thumbnail: string;
  user_id: string;
  title: string;
}
const creat_video_link  ='https://blog-dob1.onrender.com/links'

const AddLinks = () => {
  const [link, setLink] = useState('');

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleAddLink = async () => {
    const videoId = extractYouTubeVideoId(link);
    if (videoId) {
      const payload: Video = {
        url: link,
        thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
        user_id: '1',
        title : 'test',
      };
      console.log('Added video:', payload);

      await fetch(creat_video_link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Video added successfully:', data);
          setLink('');
        })
        .catch((error) => {
          console.error('Error adding video:', error);
        });
    }
  };

  function extractYouTubeVideoId(url: string): string | null {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add YouTube Link</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter YouTube link"
            value={link}
            onChange={handleLinkChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddLink}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLinks;