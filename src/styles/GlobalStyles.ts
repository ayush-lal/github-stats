import styled, { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
    background-color: #22272E;
  }

  p, h1 {
    color: #ADBAC7
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const StatsWrapper = styled.div`
  padding: 2rem;
  border-radius: 10px;
`;
