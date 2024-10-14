// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TimeJsx from './components/time'
import TimeGenerator from './components/time1'
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
  // <TimeJsx/>
  <TimeGenerator/>
)

