import Link from "next/link";
import Image from "next/image";
import { extractYouTubeVideoId } from "@/app/addLinks/utils";


interface Video {
  user_id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const video_link = `${baseUrl}/vidoes/`;
export default async function SelectVideo({ params }: { params: { username: string } }) {

 
  try {
    const { username } = params;
    const response = await fetch(`${video_link}${username}`);
    const data = await response.json();
    const videos = data?.links ?? [];

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {videos.map((video: Video | undefined, index: number) => {
          const videoId = extractYouTubeVideoId(video?.url ?? "");
          return (
            <Link key={index} href={`/youtube/${videoId}`}>
              <div className='cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition'>
                <Image
                  src={video?.thumbnail ?? ""}
                  alt={video?.title ?? ""}
                  className='w-full h-48 object-cover rounded-t-xl'
                  width={200}
                  height={300}
                />

                <div className='p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-center'>
                  <p className='text-black font-semibold'>
                    {video?.title ?? ""}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
