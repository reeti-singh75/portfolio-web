import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminRouter from './AdminRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminRouter />
  </StrictMode>,
)
