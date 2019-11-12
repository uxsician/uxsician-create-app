import React from 'react';
import { Container, Wrapper, Title, Paragraph } from './StyledApp';
import uxsicianLogo from '../../assets/images/tile.png';

const App = () => (
    <Container>
        <Wrapper>
            <img
                className="logo"
                src={uxsicianLogo}
                width="auto"
                alt="UXsician Logo"
            />
            <Title>React Boilerplate App</Title>
            <Paragraph>
                <span role="img" aria-label="Bolt">
                    🛸
                </span>{' '}
                Humanazing Technology!{'  '}
                <span role="img" aria-label="Bolt">
                    🛸
                </span>
            </Paragraph>
        </Wrapper>
    </Container>
);

export default App;
