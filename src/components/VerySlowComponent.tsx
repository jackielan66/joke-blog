export default async function VerySlowComponent({ delay }) {
    // 模拟更慢的数据获取
    const orders = await fetchOrders(delay)
    
    return (
      <ul className="space-y-2">
        {orders.map(order => (
          <li key={order.id} className="p-2 bg-gray-50 rounded">
            <p>订单 #{order.id} - {order.amount}元</p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </li>
        ))}
      </ul>
    )
  }
  
  async function fetchOrders(delay) {
    // 强制延迟
    await new Promise(resolve => setTimeout(resolve, delay))
    
    return [
      { id: 1001, amount: 158.00, date: "2023-05-15" },
      { id: 1002, amount: 42.50, date: "2023-06-20" },
      { id: 1003, amount: 299.99, date: "2023-07-05" }
    ]
  }