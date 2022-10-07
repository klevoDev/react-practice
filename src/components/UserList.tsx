import React from "react";
import {UserInfoType} from "./Practice2";
import styles from './UserList.module.css'

type PropsType = {
    userList: Array<UserInfoType>
}

export function UserList(props: PropsType) {
    const user = props.userList.map((userInfo) => {
        return (
            <div key={userInfo.id} className={styles.column}>
                <div className={styles.item}>
                    <div>
                        {userInfo.name}
                    </div>
                    <div>
                        {userInfo.age}
                    </div>
                    <div>
                        {userInfo.job}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={styles.row}>
            {user}
        </div>
    )
}


