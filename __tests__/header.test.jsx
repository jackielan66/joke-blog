import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../src/components/header'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Header />)
 
 // 2. 查找包含 "Home" 文本的 <a> 元素
    // 方法1：通过角色和名称查询（推荐）
    const homeLink = screen.getByRole('link', { name: /home/i });
    
    // 或者方法2：直接通过文本内容查询
    // const homeLink = screen.getByText(/home/i);
    
    // 3. 验证元素存在且是 <a> 标签
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.tagName).toBe('A'); // 验证确实是 <a> 元素
    
    // 4. 可选：验证 href 属性
    expect(homeLink).toHaveAttribute('href', '/'); // 假设链接指向首页
  })
})