import styled from 'styled-components';
import { motion } from 'framer-motion';
const FontF = props=> props.FontF;
const ContTitleH1 = styled(motion.h1)`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }

    @font-face {
    font-family: HackedFont;  
    font-weight: 400;
    src: url(fonts/HACKED.ttf) format('truetype');
    }
    color: ${props=> props.Color}; 
    font-family: ${props=>props.FontF};
    font-size: ${props=>props.FontS};
    `;
console.log(FontF);
export default ContTitleH1;