import React from 'react';
import './App.css';

import {HomeWork1} from "./components/HomeWork1";
import {Practice1} from "./components/Practice1";
import {Practice2} from "./components/Practice2";
import {Rating} from "./components/it-kamasutra/Rating"
import {Accardion} from "./components/it-kamasutra/Accardion";


// html
// body
// div#root
// div.App


// Доделать стили первых карточек и вынести карточку в отедльный компонент + стили

// Module css - 14 video


// Practice2 - массив товаров в этой компоненте
// Сделать карточки товаров
// Наименование товара
// Картинка (ссылка из интернета)
// Цена
// Количество в наличии



function App() {
    return (
        <div className="App">
            {/*<HomeWork1/>*/}
            {/*<Practice1 />*/}
            <Practice2 />
            <Rating value={1}/>
            <Rating value={2}/>
            <Accardion content={'Меню'} collapsed={false}/>
            <Accardion content={'Menu'} collapsed={true}/>
        </div>
    );
}

export default App;
