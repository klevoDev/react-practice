import React from "react";
import {ProductType} from "./HomeWork1";
import {Product} from "./Product";

type PropsType = {
    productList: Array<ProductType>
}

export function ProductList(props: PropsType) {

    // Array<ProductType> -> Array<JSX.Element>
    const products = props.productList.map((product) => {
        return (
            <Product
                key={product.idItem}
                {...product}
            />
        )
    })


    // ['text', 'fish', 'abroad', 'information'].map((str) => {
    //     return str.length
    // })


    return (
        <ul>
            {products}
        </ul>
    )
}