import Link from "next/link";

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-w-full min-h-screen'>
    

      {children}
      <Link
        className='absolute bottom-4 right-4 bg-red-600 p-2 rounded-full hover:bg-red-700 transition text-white z-50'
        href='/'
      >
        Go to Home
      </Link>
    </main>
  );
}
