import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageSrc = {
  Muslima: "/Mus.jpg",
  Muhammad: "/Muhammad.jpg",
  Sofia: "/Sof.jpg",
};
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

async function Users() {
  let users = [];
  try {
    const response = await fetch(baseUrl + "/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    users = await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return <div>Error fetching users</div>;
  }

  return (
    <div className='flex flex-col sm:flex-row gap-8'>
      {users.map((user: { id: number; username: string }, index: number) => {
        const borderColor = [
          "border-yellow-400",
          "border-blue-400",
          "border-pink-400",
        ][index];
        const textColor = [
          "text-pink-600",
          "text-green-600",
          "text-purple-600",
        ][index];
        const target = ["_top", "_self", "_parent"][index];

        return (
          <div
            key={user.id}
            className='bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all'
          >
            <Link
              href={`/videos/${user.username}`}
              target={target}
              rel='noopener noreferrer'
              className='flex flex-col items-center justify-center gap-4'
            >
              <Image
                src={
                  imageSrc[user.username as keyof typeof imageSrc] ?? "/Sof.jpg"
                }
                alt={user.username}
                width={50}
                height={50}
                className={`rounded-full border-4 ${borderColor}`}
              />
              <p className={`text-lg font-semibold ${textColor}`}>
                {user.username}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
