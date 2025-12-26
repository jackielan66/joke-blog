import Link from "next/link";

export default async function TodoListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
   <section className="flex h-screen">
      <h1>
        TODO LIST
      </h1>
      <main>
         {children}
      </main>
    </section>
  );
}   