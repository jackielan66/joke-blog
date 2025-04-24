import { use } from 'react'
export default async function SlowComponent({ delay }) {
    // 模拟慢速数据获取
    const data = use(fetchData(delay))
    
    return (
      <div>
        <p>用户姓名: {data.name}</p>
        <p>会员等级: {data.level}</p>
        <p>注册时间: {data.date}</p>
      </div>
    )
  }
  
  async function fetchData(delay) {
    // 强制延迟
    await new Promise(resolve => setTimeout(resolve, delay))
    
    return {
      name: "张三",
      level: "黄金会员",
      date: new Date().toLocaleDateString()
    }
  }