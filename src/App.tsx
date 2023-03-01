import React from 'react';
import './App.css';
import {Header} from "./Components/Header"
import {NavBar} from "./Components/NavBar";
import {Content} from "./Components/Content";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <Content />
        </div>
    );
}

export default App;
