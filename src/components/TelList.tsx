import React from "react";
import {TelListType} from "./Practice1";
import {Contact} from "./Contact";

type PropsType = {
    contactsList: Array<TelListType>
}

export function TelList(props: PropsType) {

    const contacts = props.contactsList.map((contact) => {
        return <Contact key={contact.id} {...contact}/>
    })

    return <>{contacts}</>
}