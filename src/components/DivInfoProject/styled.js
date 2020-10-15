import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContInfoProj = styled(motion.div)`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }
    font-family: "Forgotten Futurist";
    width: 45%;
    display: inline-block;
    color: white;
    background-color: #181E35;
    padding: 1em 2em;
    margin: 1em auto;

    *
    {
        text-align: left;
    }
    
    .Box-Texts
    {
        display: flex;
        flex-wrap: wrap;

        h4
        {
            width: 50%;
        }
    }

    img
    {
        width: 50%;
    }
    `;

export {ContInfoProj};