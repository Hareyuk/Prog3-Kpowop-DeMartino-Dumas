import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContInfoProj = styled(motion.div)`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
    }
    font-family: "Forgotten Futurist";
    width: 42%;
    display: flex;
    flex-wrap:wrap;
    color: white;
    background-color: #181E35;
    padding: 1em 2em;
    margin: 1em auto;
    z-index: 10;

    h3
    {
        width: 100%;
    }
    *
    {
        text-align: left;
    }
    
    .Box-Texts
    {
        width: 45%;
        display: flex;
        flex-wrap: wrap;

        h4
        {
            width: 45%;
        }
    }

    .Box-Image
    {
        width: 45%;
        text-align: center;
    }

    img
    {
        width: 50%;
    }

    .Box-Image img
    {
        width: 100%;
    }

    @media only screen and (max-width: 768px)
    {
        .Box-Image
        {
            width: 100%;
        }
    }
    `;

export {ContInfoProj};