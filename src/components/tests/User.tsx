
const User = (props: {
    name: string
    age: number
    hasChild: boolean
    // function returns a number
    // sum: (a:number, b:number) => number

    // function does not return anything 
    sum: ()=> void
}) => {

    return (
        <div>
            {props.name}
        </div>
    );
}

export default User;
