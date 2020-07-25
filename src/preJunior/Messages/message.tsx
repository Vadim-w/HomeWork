import React from 'react';

import Name from "./Name/name";
import Text from "./Text/text";
import Time from "./Time/time";
import './message.css';


const Message = () => {
    return (
        <div className='window'>

                <img src='https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'/>

            <div className='message'>
                <div className='name'><Name name='Ignat'/></div>
                <div className='text'><Text text='Hi, how are you?'/></div>
                <div className='time'><Time time='22:26'/></div>
            </div>

        </div>
    );
}



export default Message;