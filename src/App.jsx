import AppLayout from './layouts/AppLayout.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Navigate to='/today' replace />} />
          <Route index path='/inbox' element={<h1>Inbox</h1>} />
          <Route path='/today' element={<h1>Today</h1>} />
        </Route>

        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
