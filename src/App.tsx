import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {AppTitle} from "./components/AppTitle";
import {Rating} from "./components/Rating";


function App() {
    console.log('App rendered')
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion title={'Menu'}/>
            <Accordion title={'s'}/>
        </div>
    );
}

export default App;
