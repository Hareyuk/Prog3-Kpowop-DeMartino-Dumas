import styled from 'styled-components';
import { motion } from 'framer-motion';
const ContSearchBar = styled(motion.div)`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }
    font-family: "Forgotten Futurist";
    width: 100%;
    z-index:10;
    .Div-Bar
    {
        background-color: #181E35;
        text-align: left;
        display: flex;
        display: inline-block;
        width: 55%;
        margin-right: 1em;
    
        input
        {
            width: calc(100% - 40px);
            vertical-align: middle;
            background-color: unset;
            color: white;
            font-family: Forgotten Futurist;
            font-size: 40px;
            border: none;
        }
    }

    button, .Div-Bar
    {
        padding: 0.2em 0.5em;
    }
    `;

export default ContSearchBar;