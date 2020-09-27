import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContBtnWD = styled(motion.button)`

@font-face {
    font-family: Forgotten Futurist;  
    font-weight: 700;
    src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }

    background-color: #181E35;
    color: #fff;
    padding: 1em 2em;
    border: none;
    :hover
    {
        opacity: 0.8;
    }

    .btnWD-text
    {
        display: inline-block;
        font-size: 65px;
        vertical-align: middle;
        font-family: Forgotten Futurist;
        font-weight: 700;
    }
    `;

export default ContBtnWD;