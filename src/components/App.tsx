import * as React from 'react';
import { useState, } from 'react';
import Alert from './alerts/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './main/Home';
import FaviconContainer from './main/FaviconContainer';


const App: React.FC = () => {
    return (
        <>
            <FaviconContainer />
            <Alert />
            <Home />
        </>
    )
}

export default App