import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContButtonNavBar = styled(motion.div)`
    :hover
    {
        .div-inside
        {
            background-color: ${props=> props.Color}; 
        }
    }
    text-align: center;
    display: inline-block;
    position: relative;
    width: 150px;
    height: 30px;
    .div-inside
    {
        background-color: ${props=> props.ColorAdentro}; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 30px;
        clip-path: polygon(0 100%,20% 0%,80% 0%,100% 100%);
    }

    .div-border
    {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        width: 150px;
        height: 30px;
        background-color: ${props=> props.Color};
        clip-path: polygon(0 100%,20% 0%,80% 0%,100% 100%,95% 100%,77% 15%,23% 15%,5% 100%);
    }

    p
    {
        position: absolute;
        margin: 0;
        color: white;
        top: 62.5%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    `;

export default ContButtonNavBar;