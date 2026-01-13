

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function DashboardPage() {

  await sleep(2000);

  // 抛出错误
    throw new Error('this is a error')
  
  return <div className="flex flex-col items-center justify-center min-h-screen py-2">
      dashboard 
    </div>
  
}
