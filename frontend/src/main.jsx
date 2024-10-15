// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimeSlot from './components/time3'
// import App from './App.jsx'
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import AppContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <AppContextProvider>
  //     <App />
  //   </AppContextProvider>
  // </BrowserRouter>,
  <TimeSlot/>
)
