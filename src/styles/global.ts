import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    /* 1rem = a 10px */
    font-size: 62.5%;
  }


  body{
    background: #DCDCDC url(${githubBackground}) no-repeat 70% top;
    font-size: 1.6rem;
    font-family: 'Roboto' sans-serif;
  }

  html, body {
    height: 0;
  }

  button{
    cursor: pointer;
  }

  #root{
    margin: auto;
    margin-top: 40px;
    max-width: 1100px;
    height: 100vh;
    width: 100%;
    padding: 0px 25px;
  }
  @media (max-width: 334px) {

    html {
      font-size: 50%;
    }
  }

`;
