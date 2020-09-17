import styled from 'styled-components'
import { motion } from 'framer-motion' 

const Container = styled(motion.button)`
    background-color: ${props=> props.primary ? '#aa1144' : 'darkmagent'}; 
    border: 2px solid #aa1144;
    color: ${props => props.primary ? '#ffffff' : '#000000'};
    padding: 15px 20px;
    margin-top:20px;
    margin-left: 10px;
    :hover
    {
        opacity: 0.8;
    }
    `;

export default Container;

/* puedo meter esto tambien sino despues de margin-left y antes del `
    ${props => props.primary && css `color: white; backgorund: black; `};
    */