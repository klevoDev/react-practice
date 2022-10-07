import React from 'react';
import {TelListType} from "./Practice1";
import {UserList} from "./UserList";

const userInfoList: Array<UserInfoType> = [
    {
        id: 1,
        name: 'Alex',
        age: 24,
        job: 'developer',
    }, {
        id: 2,
        name: 'Pavel',
        age: 44,
        job: 'business'
    }, {
        id: 3,
        name: 'Maks',
        age: 34,
        job: 'doctor'
    }, {
        id: 4,
        name: 'Alex',
        age: 28,
        job: 'teacher'
    },
]
export type UserInfoType = {
    id: number;
    name: string;
    age: number;
    job: string;
}

export function Practice2() {
    // cards

    return (
        <div>
            <UserList userList={userInfoList}/>


        </div>
    );
}

