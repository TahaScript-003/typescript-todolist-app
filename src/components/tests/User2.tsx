

type UserMother = 'elli'| 'jenny'| 'susan' // union type

type User = {
    name: string
    age: 20
    hasChild : boolean
    father?: string
    mother: UserMother // type in type
}

const User2:React.FC<User> = ({name, age, hasChild, father}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{hasChild ? 'Yes' : 'No'}</div>
            {father && <div>Father: {father}</div>}
        </div>
    );
}

export default User2;
