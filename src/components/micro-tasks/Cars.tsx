type CarsTypeProps = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export function Cars(props: CarsTypeProps) {
    return (
        <table>
            {props.cars.map((valueFromCarType, index) => {
                return (
                    <>
                        <tr key={index}>
                            <th>Manufacturer</th>
                            <th>Model</th>
                        </tr>
                        <tr key={index}>
                            <th>{valueFromCarType.manufacturer}</th>
                            <td>{valueFromCarType.model}</td>
                        </tr>
                    </>
                )
            })}
        </table>
    )
}