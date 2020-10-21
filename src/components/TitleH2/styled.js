import styled from 'styled-components';
import { motion } from 'framer-motion';
const ContTitleH2 = styled(motion.h2)`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }
    color: ${props=> props.Color}; 
    font-family: ${props=>props.FontF};
    font-size: ${props=>props.FontS};

    ${props=> props.CenterText && `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    `}
    `;

export default ContTitleH2;