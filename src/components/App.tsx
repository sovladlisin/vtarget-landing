import * as React from 'react';
import Home from './main/Home';
import FaviconContainer from './main/FaviconContainer';


const App: React.FC = () => {
    return (
        <>
            <FaviconContainer />
            <Home />
        </>
    )
}

export default App