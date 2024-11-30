
export default function YoutubeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen flex-col min-w-full">
            {children}
        </main>
    );
}
    