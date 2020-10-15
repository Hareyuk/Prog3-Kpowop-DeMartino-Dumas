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

    input, button
    {
        background-color: #181E35;
    }
        `;

export default ContSearchBar;