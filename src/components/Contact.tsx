import React from 'react';
import {TelListType} from "./Practice1";

type PropsType = TelListType & {}

export function Contact(props: PropsType) {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.tel}
            </td>
        </tr>
    );
}

