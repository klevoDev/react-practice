import React from 'react';
import './App.css';

import {HomeWork1} from "./components/HomeWork1";
import {Practice1} from "./components/Practice1";
import {Practice2} from "./components/Practice2";
import {Rating} from "./components/it-kamasutra/Rating"
import {Accardion} from "./components/it-kamasutra/Accardion";
import {Header} from "./components/micro-tasks/Header";
import {Body} from "./components/micro-tasks/Body";
import {Footer} from "./components/micro-tasks/Footer";
import {ReactComponent} from "*.svg";
import {NewComponent} from "./components/micro-tasks/NewComponent";
import {Cars} from "./components/micro-tasks/Cars";


const students = [
    {id: 1, name: "Mark", age: 13},
    {id: 2, name: "Axe", age: 15},
    {id: 3, name: "Ira", age: 18},
];

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
];

function App() {
    return (
        <div className="App">
            {/*<HomeWork1/>*/}
            {/*<Practice1 />*/}
            {/*<Practice2 />*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Accardion content={'Меню'} collapsed={false}/>*/}
            {/*<Accardion content={'Menu'} collapsed={true}/>*/}
            {/*<Header titleForHeader={'Header props'}/>*/}
            {/*<Body titleForBody={"Body props"}/>*/}
            {/*<Footer titleForFooter={"Body props"}/>*/}
            <NewComponent students={students}/>
            <Cars cars={topCars}/>
        </div>
    );
}

export default App;
