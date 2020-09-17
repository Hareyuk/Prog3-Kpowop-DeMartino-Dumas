import React from 'react';
import Container from './styled';

const Paragraph = ({children, ...props})=>
{
    return(
        <Container primary={props.primary}>
            {children}
        </Container>
    );
}

export default Paragraph;