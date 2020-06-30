import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 300px;
  margin-bottom: 5px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #808080;

    span {
      margin-left: 3px;
    }
  }
  @media (max-width: 340px) {
    flex-direction: column;
    a {
      margin-top: 12px;
    }
  }
`;

export const InformationHeader = styled.div`
  margin-top: 80px;
  display: block;
  display: flex;
  align-items: center;

  img {
    height: 128px;
    width: 128px;
    border-radius: 50%;
  }

  div {
    margin-left: 20px;
  }

  @media (max-width: 454px) {
    flex-direction: column;
    margin-top: 20px;
    img {
      width: 64px;
      height: 64px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 0px;
      align-items: center;
    }
  }
`;

export const InformationFooter = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
  display: flex;
  align-items: center;

  div + div {
    margin-left: 90px;
  }

  @media (max-width: 454px) {
    justify-content: space-between;
    div + div {
      margin-left: 50px;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

export const Body = styled.div`
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

    div {
      flex: 1;
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
      color: none;
    }
  }
`;
