import Link from "next/link";

export default function YoutubeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen flex-col min-w-full">
            {children}
            <Link
                href='/'
         
                className='absolute bottom-4 right-4 bg-red-600 p-2 rounded-full hover:bg-red-700 transition z-50 text-white'
              >
                Go Back
              </Link>
        </main>
    );
}
    