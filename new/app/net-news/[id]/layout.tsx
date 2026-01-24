export default function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section className="container mx-auto p-4">
        <nav className="border-b p-4">
            <a href="/" className="mr-4">Home</a>
            <a href="/posts">Posts</a>
        </nav>
        {children}
       
    </section>

}
