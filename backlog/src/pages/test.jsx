import { Suspense } from 'react'
import prisma from '@/lib/prisma'

export async function getServerSideProps() {
  // prisma.user.
  try {
    await prisma.user.create({
      data: {
        email:"12332@123.com",
        name:"123"
      },
    });
  } catch (error) {
    
  }

  const users = await prisma.user.findMany();
  console.log(users,"users 12");
  return { props: { users } };
}

export default function Home() {
  let artist = {
    id: 'the-beatles',
    name: 'The Beatles',
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">

      <Suspense fallback={<p>加载中外部数据..</p>}>
          afaf afaf
      </Suspense>
    </main>
  )
}