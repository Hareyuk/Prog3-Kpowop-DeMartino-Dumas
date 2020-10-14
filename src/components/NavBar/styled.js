import styled from 'styled-components'
import { motion } from 'framer-motion' 

const StyledNavBar = styled(motion.div)`

    position: fixed;
    width: 100vh;
    left: 0;
    z-index: 1000;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(-50%,-100%);
    -ms-transform: rotate(90deg) translate(-50%,-100%);
    transform: rotate(90deg) translate(0%,-100%);
    
    a
    {
        color: white;
        text-decoration: none;
    }
    `;

export {StyledNavBar};