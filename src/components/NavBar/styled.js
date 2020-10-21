import styled from 'styled-components'
import { motion } from 'framer-motion' 

const StyledNavBar = styled(motion.div)`

    position: fixed;
    max-width: 100vh;
    height: 30px;
    left: 0;
    top: 0%;
    z-index: 1000;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    -webkit-transform-origin: top left;
    -ms-transform-origin: top left;
    transform-origin: top left;
    -webkit-transform: rotate(90deg) translate(-50%,-100%);
    -ms-transform: rotate(90deg) translate(-50%,-100%);
    -webkit-transform: rotate(90deg) translate(0%,-100%);
    -ms-transform: rotate(90deg) translate(0%,-100%);
    transform: rotate(90deg) translate(0%,-100%);
    
    a
    {
        color: white;
        text-decoration: none;
    }
    `;

export {StyledNavBar};