import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'; // Use App.css for global styles
import App from './App.jsx'

//  Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'
    appearance={{
        baseTheme: dark,
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
)
