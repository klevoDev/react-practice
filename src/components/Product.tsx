import React from 'react';

type PropsType = {
    idItem: string
    title: string
    price: number
    // count: number
    // inStock: boolean
}

export function Product(props: PropsType) {
    return (
        <li>
            <h4>{props.title}</h4>
            <p>Цена: {props.price}</p>
        </li>
    )
}