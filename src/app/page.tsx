"use client";

import Image from "next/image";
import Link from 'next/link'
import { useEffect, useState } from "react";
import { User } from "./addLinks/types";
const imageSrc = {Muslima:"/Mus.jpg", Muhammad:"/Muhammad.jpg", Sofia:"/sof.jpg"};
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleUserChange = (name: string) => {
    sessionStorage.setItem("userName", name);
  };
 useEffect(() => {
  const fetchUsers = async () => {
    // setState(prev => ({ ...prev, loading: true }));
    if (!baseUrl) {
      console.error('process.env.baseUrl is not defined');
      return;
    }
    try {
      const response = await fetch(baseUrl + '/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      // setState(prev => ({
      //   ...prev,
      //   error: 'Error fetching users. Please try again later.',
      // }));
      console.error('Error fetching users:', err);
    } finally {
      // setState(prev => ({ ...prev, loading: false }));
    }
  };
    fetchUsers();
  }, [baseUrl]);

  


  return (
    <div className="flex flex-col items-center justify-space-between h-screen min-w-screen bg-gradient-to-b from-pink-300 via-purple-400 to-blue-500 text-white p-4 font-sans flex flex-col " >
      <main className="items-center flex-1 ">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left text-purple-800 mb-16">
          Welcome to the <span className="text-pink-600">PC App</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-8">
          {users.map((user, index) => {
      
            const borderColor = ["border-yellow-400", "border-blue-400", "border-pink-400"][index];
            const textColor = ["text-pink-600", "text-green-600", "text-purple-600"][index];
            const target = ["_top", "_self", "_parent"][index];

            return (
              <div key={user.id} className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all">
                <Link
                  href="/youtube"
                  target={target}
                  rel="noopener noreferrer"
                  onClick={() => handleUserChange(user.username)}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <Image
                    src={imageSrc[user.username as keyof typeof imageSrc]}
                    alt={user.username}
                    width={50}
                    height={50}
                    className={`rounded-full border-4 ${borderColor}`}
                  />
                  <p className={`text-lg font-semibold ${textColor}`}>{user.username}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="m-16 text-center text-sm text-purple-800 font-semibold size-xl">
        Have fun exploring!
      </footer>
    </div>
  );
}

