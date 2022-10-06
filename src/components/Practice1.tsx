import React from 'react';
import {Title} from "./Title";
import {TelList} from "./TelList";

const telList: Array<TelListType> = [
    {
        id: 1,
        name: 'Alex',
        tel: '+765465464'
    }, {
        id: 2,
        name: 'Alex',
        tel: '+43059'
    }, {
        id: 3,
        name: 'Alex',
        tel: '+64576867'
    }, {
        id: 4,
        name: 'Alex',
        tel: '+432543'
    },
]

export type TelListType = {
    id: number,
    name: string,
    tel: string
}






export function Practice1() {
    // Отрисовать список из телефонной книги
    // Но вёрстка должны быть выпролнена на таблицах
    // table

    // Имя | Телефон
    // ... | +7654645
    // ... | +7654645
    // ... | +7654645

    // Warning не должно быть
    // Не должно быть всё в одной компоненте, необходимо разбивать
    // Всё должно быть протипизировано



    return (
        <div>
            <Title title={'Телефонная книга'}/>
            <table>
                <tr>
                    <th>Имя</th>
                    <th>Телефон</th>
                </tr>
                <TelList contactsList={telList}/>
            </table>
        </div>
    );
}

