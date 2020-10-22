import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContInfoDash = styled(motion.div)`

    text-align: center;
    width: 25%;
    display: inline-block;
    color: white;
    background-color: rgba(227,16,117, 0.45);
    padding: 1em 2em;
    border-radius: 0 2em 0 0;
    margin: 1em 3em;
    

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

export {ContInfoDash};