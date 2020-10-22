import styled from 'styled-components'
import { motion } from 'framer-motion' 
const WidthPx = props=> props.WidthPx;
const HeightPx = props=> props.HeightPx;
const FontSize = props=> props.FontSize;
const ContBtnWD = styled(motion.button)`
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
    padding: 1em 2em;
    border: none;
    :hover
    {
        opacity: 0.8;
        box-shadow: 3px 3px 10px #aa1144;
    }

    .btnWD-text
    {
        display: inline-block;
        font-size: ${FontSize};
        vertical-align: middle;
        font-family: Forgotten Futurist;
        font-weight: 700;
        a
        {
            color: white;
            text-decoration: none;
        }
    }
    `;

export default ContBtnWD;