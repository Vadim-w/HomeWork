import React from 'react';

type TextType = {
    text: string,
}

const Text:React.FC<TextType> = (props) => {
return(
    <div>{props.text}</div>
);
}

export default Text;