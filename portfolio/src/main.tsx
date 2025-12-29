import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contact from './ui/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
