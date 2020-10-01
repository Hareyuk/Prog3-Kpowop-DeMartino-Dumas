import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContButtonNavBar = styled(motion.div)`

    text-align: center;
    display: inline-block;
    position: relative;
    width: 150px;
    height: 50px;
    transform: translate(0,-100%);
    .div-inside
    {
        background-color: ${props=> props.ColorAdentro}; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 150px;
        clip-path: polygon(0 100%, 20% 80%, 80% 80%, 100% 100%);
    }

    .div-border
    {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        width: 150px;
        height: 150px;
        background-color: ${props=> props.Color};
        clip-path: polygon(0 100%, 20% 80%, 80% 80%, 100% 100%, 96% 100%, 77% 83%, 23% 83%, 4% 100%);
    }

    p
    {
        position: absolute;
        margin: 0;
        color: white;
        top: 99%;
        left: 50%;
        transform: translate(-50%, -100%);
    }

    `;

export default ContButtonNavBar;