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
            top: 0;
            color: white;
            left: 50%;
            transform: translate(-50%,85%);
        }

    font-family: HackedFont;
}
    `;

export {ContImgLogo};