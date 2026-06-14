// intersection types

import { useRef } from "react"

/* intersection types are used to combine multiple types into one.
In this case, User2 is an intersection of User1 and an object with a children property.
This means that User2 has all the properties of User1 (name and age) as well as the children property.*/
type User1 = {
    name: string
    age: number
}
type User2 = User1 & {
    children: string[]
}

interface User3 {
    name: string
    age: number
}
interface User3 extends User1 {
    children: string[]
}

const user: User3 = {
    name: 'ali',
    age: 50,
    children: ['reza', 'hasan']
}



const Test1 = () => {
    const ref = useRef<HTMLButtonElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <button ref={ref}></button>
            <input type="text" ref={inputRef} />
        </>
    );
}

export default Test1;
