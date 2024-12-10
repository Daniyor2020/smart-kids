import Users from "./Users";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-space-between h-screen min-w-screen bg-gradient-to-b from-pink-300 via-purple-400 to-blue-500 text-white p-4 font-sans flex flex-col '>
      <main className='items-center flex-1 '>
        <h1 className='text-4xl sm:text-6xl font-bold text-center sm:text-left text-purple-800 mb-16'>
          Welcome to the <span className='text-pink-600'>Smart Kids App</span>
        </h1>

        <Users />
      </main>

      <footer className='m-16 text-center text-sm text-purple-800 font-semibold size-xl'>
        Have fun exploring!
      </footer>
    </div>
  );
}
