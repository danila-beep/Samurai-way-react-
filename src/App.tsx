import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home </a>
            <a href="#">News Feed </a>
            <a href="#">Messages</a>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <div>Technologies</div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </div>
    );
}

export default App;
