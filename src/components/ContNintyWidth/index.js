import React from 'react'
import StyledContNintyWidth from './styled'

const ContNintyWidth = ({ children, ...props }) => {

    return (
        <StyledContNintyWidth>
            {children}
        </StyledContNintyWidth>
    )
}

export default ContNintyWidth;