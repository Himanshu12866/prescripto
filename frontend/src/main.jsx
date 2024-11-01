// main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext.jsx';
import Root from "./root.jsx"; // Import the new Root component
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <Root /> {/* Render the Root component */}
    </AppContextProvider>
  </BrowserRouter>
);
