import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 80px;
  max-width: 300px;
`;

export const Form = styled.form<FormProps>`
  max-width: 600px;
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    border-radius: 3px;
    border-style: none;
    padding: 5px 20px;
    border: 1px solid white;
    box-shadow: 6px 6px 10px #989898;

    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    color: white;
    font-size: 1.6rem;
    border-radius: 3px;
    margin-left: 10px;
    width: 180px;
    height: 50px;
    background: #32cd32;
    border-style: none;
    transition: 0.7s;
    box-shadow: 6px 6px 10px #989898;

    &:hover {
      background-color: #008000;
    }
  }

  @media (max-width: 334px) {
    flex-direction: column;
    button {
      width: 100%;
      margin-left: 0;
    }

    input {
      width: 100%;
      height: 50px;
      flex: none;
    }
  }
`;

export const Repositories = styled.div`
  max-width: 600px;
  margin-top: 80px;

  a {
    border-radius: 5px;
    background: #fff;
    width: 100%;
    display: block;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 20px 20px;

    &:hover {
      transform: translate(10px, 0px);
      transition: all 0.5s;
    }

    & + a {
      margin-top: 10px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 20px;
      color: #000000;

      h3 {
        padding-right: 10px;
      }

      p {
        padding-right: 10px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;

export const InputError = styled.span`
  display: block;
  color: red;
  margin-top: 6px;
`;
