import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Import the BrowserRouter 
import { BrowserRouter } from 'react-router-dom';
// Import the AuthContext Provider
import { AuthProvider } from './Context/AuthContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
