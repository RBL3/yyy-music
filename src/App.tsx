import React from 'react'
import Header from '@/pages/header'
import Home from '@/pages/home'
import '@/style/index.less'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 窗口焦点影响的数据刷新 -> 离开窗口重新返回后是否刷新数据
      refetchOnWindowFocus: false,
      retry: 10, // 查询重试
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000) // 重试间隔
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  )
}

export default App
