import styled from 'styled-components';

const Container = styled.p`
    background-color: ${props=> props.primary ? '#fff' : '#aa1144'}; 
    border: 2px solid #aa1144;
    color: ${props => props.primary ? '#aa1144' : '#fff'};
    padding: 15px 20px;
    `;

export default Container;