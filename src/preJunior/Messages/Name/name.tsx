import React from 'react';


type NameType = {
    name:string,
}

const Name: React.FC<NameType> = (props: NameType) => {
    return (
        <div>{props.name}</div>
    );
}

export default Name;