import React from 'react';

type timeType = {
    time:string,
}

const  Time: React.FC<timeType> = (props) => {
return(
    <div>{props.time}</div>
);
}

export default Time;