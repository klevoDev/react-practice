type starType = {
    selected: boolean
}

type ratingPropsType = {
    value: number
}

export function Rating(props: ratingPropsType){
    if(props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if(props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )

}

function Star(props: starType){
    if(props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}