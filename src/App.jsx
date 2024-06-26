// routing and routes
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router'
// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import defaultOptions from './configs/QueryConfigs'
import { ToastContainer } from 'react-toastify'

function App() {
const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router/>
    <ToastContainer/>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
