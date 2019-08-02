import styled from 'styled-components'

const Main = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.gradient};
`;

export default Main