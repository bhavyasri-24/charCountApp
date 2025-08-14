import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TextBox from './TextBox'
import './input.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextBox/>
  </StrictMode>,
)
