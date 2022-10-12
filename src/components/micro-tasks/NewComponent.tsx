type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export function NewComponent(props: NewComponentType) {

    return (
        <ul>
            {props.students.map((objectFromStudents, index) => {
                return (
                    <li key={objectFromStudents.id}>
                       <span>{objectFromStudents.name}</span>
                        <span> age: {objectFromStudents.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}