import React from "react";

export function Accordion(props: any) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>
    )
}

function AccordionTitle(props:any) {
    console.log('AccordionTitle rendered')
    return (
        <h3>Аккордион</h3>
    )
}

function AccordionBody(props: any) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}