import React from "react";

type TitleProps = {
    title: string
}

export function Title(props:TitleProps) {
    return (
        <h3>{props.title}</h3>
    )
}