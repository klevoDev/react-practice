import React from "react";

type AccardionPropsType = {
    content: string
    collapsed: boolean
}

type  AccardionProps = {
    content: string
}


export function Accardion(props: AccardionPropsType) {
    if(props.collapsed === true) {
        return (
            <div>
                <AccardionTitle content={props.content}/>
                <AccardionBody content={props.content}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccardionTitle content={props.content}/>
            </div>
        )
    }

}

function AccardionTitle(props: AccardionProps) {
    return (
        <h3>{props.content}</h3>
    )
}

function AccardionBody(props: AccardionProps) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}