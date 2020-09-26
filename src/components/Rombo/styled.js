import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContRombo = styled(motion.div)`
    .div-border
    {
        background-color: ${props=> props.Color}; 
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        width:${props=> props.Tamanio + "px"};
        height:${props=> props.Tamanio + "px"};
        position: relative;
    }

    .div-inside
    {
        background-color: ${props=> props.ColorAdentro}; 
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        width:${(props=> props.TamanioDentro)+ "px"};
        height:${(props=> props.TamanioDentro)+ "px"};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
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

export default ContRombo;