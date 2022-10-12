type FooterPropsType = {
    titleForFooter: string
}

export function Footer(props: FooterPropsType){
    return (
        <>
            {props.titleForFooter}
        </>
    )
}