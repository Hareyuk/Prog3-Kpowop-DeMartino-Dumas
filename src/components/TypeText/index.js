import React, {useState, useEffect } from 'react';
import {TypingText } from './styled';

const TypeText =  ({children, ...props}) => {
    
      const {TypeTag, TextOriginal} = props;
      const [texted, setTexted] = useState(false);
      const [TextWrite, addCharText] = useState('');
      useEffect(() => {
          //Mientras la cantidad de letras del texto escribiendose sea distinta a la cantida del texto a escribir... 
      if(TextWrite.length-1 !== TextOriginal.length && !texted)
        {
            setTimeout(()=>
            {
                //quito el ultimo "_"
                const lastText = TextWrite.substring(0, (TextWrite.length-1));
                //consigo la letra del TextOriginal a añadir
                const char = TextOriginal.substring(lastText.length, lastText.length+1);
                //Agrego la nueva letra al texto escribiendose, y un "_" más para parecer que se escribe
                const newTxt = lastText + char + "_";
                //Asigno el nuevo texto
                addCharText(newTxt);
            }, 100);
        }
        else if (!texted)
        {
            //Si TEXTED sigue en false, eliminar la última letra que es el "_" y asignarla en TRUE para que se acabe.
            //Esto se acciona únicamente cuando el texto ya consiguió todas las letras.
            const newTxt = TextWrite.substring(0, (TextWrite.length-1));
            addCharText([newTxt]);
            setTexted(true);
        }
      });
        
    return(
        <TypingText FFont={props.FFont}>
            {TypeTag !== "" ? (<TypeTag> {TextWrite} </TypeTag>) : TextWrite } 
        </TypingText>
    )
}

export {TypeText};


/*
VERSION VIEJA DE ESCRIBIR TEXTO
    const {TypeTag, Text} = props;
    const [texted, setTexted] = useState(false);
    
    const [textWrite, addCharText] = useState(['',0]);
    useEffect(() => {
        //Si el contador aún no llegó al límite de cantidad de caracteres del texto, y "TEXTED" aun es false.
         if(textWrite[1] !== Text.length && !texted)
        {
            setTimeout(()=>
            {
                //consigo la letra del Text a añadir en el textWrite[0]
                const char = Text.substring(textWrite[1], textWrite[1]+1);
                //Sumo uno al contador
                const num = textWrite[1] + 1;
                //Agrego la letra al texto escribiendose
                const newTxt = textWrite[0].substring(0, (textWrite[0].length-1)) + char + "_";
                //Asigno el nuevo texto y el contador nuevo al state
                addCharText([newTxt, num]);
            }, 100);
        }
        else if (!texted)
        {
            //Si TEXTED sigue en false, eliminar la última letra que es el "_" y asignarla en TRUE para que se acabe.
            const newTxt = textWrite[0].substring(0, (textWrite[0].length-1));
            addCharText([newTxt, textWrite[1]]);
            setTexted(true);
        }
      }); */