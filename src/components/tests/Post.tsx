import React, { JSX } from "react";

type PostProps = {  
    // children: React.ReactNode // React.ReactNode is a type that can be used to represent any valid React child, including elements, strings, numbers, etc.
    children: JSX.Element | JSX.Element[] // JSX.Element or array of JSX.Element
}


const Post:React.FC<PostProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Post;
