import React from 'react';
import Container from './styled';

const Div = ({children, ...props})=>
{
    return(
        <Container primary={props.primary}>
            {children}
        </Container>
    );
}

export default Div;