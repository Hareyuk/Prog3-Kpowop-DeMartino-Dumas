import React from 'react'
import StyledContProject from './styled'

const ContProject = ({ children, ...props }) => {

    return (
        <StyledContProject>
            {children}
        </StyledContProject>
    )
}

export default ContProject;