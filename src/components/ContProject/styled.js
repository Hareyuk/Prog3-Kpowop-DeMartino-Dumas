import styled from 'styled-components'
import { motion } from 'framer-motion' 

const StyledContProject = styled(motion.div)`
    display:flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content:space-between; 

    .divsInfo
    {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between; 
    }
    `;

export default StyledContProject;

/* puedo meter esto tambien sino despues de margin-left y antes del `
    ${props => props.primary && css `color: white; backgorund: black; `};
    */