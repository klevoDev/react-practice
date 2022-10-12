type HeaderPropstype = {
    titleForHeader: string
}

export function Header(props: HeaderPropstype) {
    return (
        <>
            {props.titleForHeader}
        </>
    )
}