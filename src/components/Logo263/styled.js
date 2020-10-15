import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContImgLogo = styled(motion.div)`
    position: relative;
    @font-face {
        font-family: HackedFont;  
        font-weight: 400;
        src: url(fonts/HACKED.ttf) format('truetype');
        }

        img
        {
            width: 40%;
        }

        h1
        {   
            position: absolute;
            font-size: 5em;
            top: 40%;
            color: white;
            left: 50%;
            transform: translate(-50%,-50%);
        }

    font-family: HackedFont;

        ${props=>props.ToSide && `
        opacity: 0.5;
        top: 0;
        right: 0;
        position: fixed;
        img
        {
            width: 100%;
        }
        width: 500px;
        `}
    `;

export {ContImgLogo};