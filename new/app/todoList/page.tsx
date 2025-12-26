'use client';
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">TodoListPage 的作业</h1>
          <p className="text-center text-gray-600 mb-8">管理您的待办事项</p>
          
          {/* 添加待办事项表单 */}
          <div className="flex mb-8">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="添加新的待办事项..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button 
              onClick={addTodo}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium transition duration-200"
            >
              添加
            </button>
          </div>
          
          {/* 待办事项列表 */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">暂无待办事项</p>
                <p className="text-gray-400 text-sm mt-2">添加一些任务开始吧！</p>
              </div>
            ) : (
              todos.map(todo => (
                <div 
                  key={todo.id} 
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    todo.completed 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-white border-gray-200'
                  } transition duration-200 shadow-sm hover:shadow-md`}
                >
                  <div 
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex items-center cursor-pointer flex-1 ${
                      todo.completed ? 'text-gray-500' : 'text-gray-800'
                    }`}
                  >
                    <div className={`w-6 h-6 flex items-center justify-center border rounded mr-3 ${
                      todo.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-300'
                    }`}>
                      {todo.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className={todo.completed ? 'line-through' : ''}>
                      {todo.text}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
          
          {/* 统计信息 */}
          <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
            <p>总计: {todos.length} 项</p>
            <p>已完成: {todos.filter(t => t.completed).length} 项</p>
            <p>待完成: {todos.filter(t => !t.completed).length} 项</p>
          </div>
        </div>
      </div>
    </div>
  );
}