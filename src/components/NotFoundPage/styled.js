import styled from 'styled-components'
import { motion } from 'framer-motion' 

const ContErrorComp = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/error.png');
    background-size: 400px;
    background-repeat: repeat;
    
    .contError
    {
        
    }
    `;

export default ContErrorComp;