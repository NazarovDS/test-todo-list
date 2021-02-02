import React from 'react';
import './scss/App.scss'
import {NavBar} from "./Components/NavBar";
import {Container} from "./Components/Container";


// форма добавления таска

function App() {
    return (
        <div className={'wrapper'}>
            <NavBar/>
            <Container/>
        </div>
    );
}

export default App;
