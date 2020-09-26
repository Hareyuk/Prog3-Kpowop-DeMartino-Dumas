import React, {useState, useEffect } from 'react';
import {TypingText } from './styled';

const TypeText =  ({children, ...props}) => {
    const {TypeTag, Text} = props;
    const [texted, setTexted] = useState(false);
    
    const [textWrite, addCharText] = useState(['',0]);
    useEffect(() => {
        if(textWrite[1] !== Text.length && !texted)
        {
            setTimeout(()=>
            {
                const char = Text.substring(textWrite[1], textWrite[1]+1);
                const num = textWrite[1] + 1;
                const newTxt = textWrite[0].substring(0, (textWrite[0].length-1)) + char + "_";
                addCharText([newTxt, num]);
            }, 150);
        }
        else if (!texted)
        {
            const newTxt = textWrite[0].substring(0, (textWrite[0].length-1));
            addCharText([newTxt, textWrite[1]]);
            setTexted(true);
        }
      });
        
    return(
        <TypingText>
            <TypeTag> {textWrite[0]} </TypeTag>
        </TypingText>
    )
}

export {TypeText};
