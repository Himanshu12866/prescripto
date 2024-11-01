// Root.jsx (Create a new component)

import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import App from './App';

const Root = () => {
    const { theme } = useContext(AppContext);

    return (
        <div style={{ backgroundColor: `${theme}` }}>
            <App />
        </div>
    );
};

export default Root;
