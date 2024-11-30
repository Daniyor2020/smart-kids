"use client";

import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  const handleUserChange = (name: string) => {
    sessionStorage.setItem("userName", name);
  };

  return (
    <div className="flex flex-col items-center justify-space-between h-screen min-w-screen bg-gradient-to-b from-pink-300 via-purple-400 to-blue-500 text-white p-4 font-sans flex flex-col " >
      <main className="items-center flex-1 ">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left text-purple-800 mb-16">
          Welcome to the <span className="text-pink-600">PC App</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all">
            <Link
              href="/youtube"
              target="_top"
              rel="noopener noreferrer"
              onClick={() => handleUserChange("Muslima")}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src="/Mus.jpg"
                alt="Muslima"
                width={200}
                height={200}
                className="rounded-full border-4 border-yellow-400"
              />
              <p className="text-lg font-semibold text-pink-600">Muslima</p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all">
            <Link
              href="/youtube"
              target="_self"
              rel="noopener noreferrer"
              onClick={() => handleUserChange("Muhammad")}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src="/Muhammad.jpg"
                alt="Muhammad"
                width={200}
                height={200}
                className="rounded-full border-4 border-blue-400"
              />
              <p className="text-lg font-semibold text-green-600">Muhammad</p>
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-all">
            <Link
              href="/youtube"
              target="_parent"
              rel="noopener noreferrer"
              onClick={() => handleUserChange("Sofia")}
              className="flex flex-col items-center justify-center gap-4"
            >
              <Image
                src="/sof.jpg"
                alt="Sofia"
                width={200}
                height={200}
                className="rounded-full border-4 border-pink-400"
              />
              <p className="text-lg font-semibold text-purple-600">Sofia</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="m-16 text-center text-sm text-purple-800 font-semibold size-xl">
        Have fun exploring!
      </footer>
    </div>
  );
}
