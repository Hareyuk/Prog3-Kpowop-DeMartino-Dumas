import styled from 'styled-components'
import { motion } from 'framer-motion' 
const WidthPx = props=> props.WidthPx;
const HeightPx = props=> props.HeightPx;

const StyledLogOutButton = styled(motion.button)`
    width: ${WidthPx !== undefined ? WidthPx : 'unset'};
    height: ${HeightPx !== undefined ? HeightPx : 'unset'};
    text-align: left;
    cursor: pointer;
    ${props=> props.primary ? '#aa1144' : 'darkmagent'}
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
        }

        background-color: #181E35;
        color: #fff;
        padding: 0.3em 0.7em;
        border: none;
        font-size: 1.8em;
        font-family: Forgotten Futurist;
        font-weight: 700;
        z-index: 20;
        div
        {
            vertical-align: middle;
        }
        :hover
        {
            opacity: 0.8;
        }    
        
        .class-rombo-personalized
        {
            margin-right: 0.8em;
        }

        position: absolute;
        right: 2em;
        top: 2em
    `;

export default StyledLogOutButton;