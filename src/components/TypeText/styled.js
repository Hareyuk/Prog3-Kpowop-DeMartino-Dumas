import styled from 'styled-components';

const TypingText = styled.div`
    @font-face {
        font-family: Forgotten Futurist;  
        font-weight: 700;
        src: url(fonts/forgotten_futurist_bd.ttf) format('truetype');
        }
        
    @font-face {
        font-family: HackedFont;  
        font-weight: 400;
        src: url(fonts/HACKED.ttf) format('truetype');
        }

    font-family: ${props=> props.FFont};
    color: white;
`
export {TypingText};