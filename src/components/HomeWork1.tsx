import React from 'react';
import {ProductList} from "./ProductList";

export type ProductType = {
    idItem: string
    title: string
    price: number
}
export type FullDataType = {
    productList: Array<ProductType>
    heading: string
}


const fullData: FullDataType = {
    productList: [
        {
            idItem: 'frc-44',
            title: 'Apple',
            price: 90

        }, {
            idItem: 'frc-654',
            title: 'Potato',
            price: 150
        }, {
            idItem: 'frc-98',
            title: 'Milk',
            price: 70
        }, {
            idItem: 'frc-11',
            title: 'Black Bread',
            price: 40
        },
    ],
    heading: 'Список проудктов'
}


// READ
// 1. Array<DataType> -> Array<html> (map)

export function HomeWork1() {

    return (
        <div>
            <h3>{fullData.heading}</h3>
            <ProductList productList={fullData.productList}/>
        </div>
    )
}


// string, number, array<string> array<number> array<jsx> (component / html)
// null, undefined, boolean