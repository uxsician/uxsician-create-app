import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    background-color: #DB504A;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`;

const Paragraph = styled.p`
    color: #fff;
    font-size: 16px;
`;

const Link = styled.a`
    color: #00a8e8;
`;

export { Container, Wrapper, Title, Paragraph, Link };