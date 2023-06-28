import styled from "styled-components";

export const Title = styled.h1``;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  min-width: 500px;
  max-width: 900px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const SymbolInfoContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  flex-direction: column;
  & li {
    display: flex;
    flex: 1;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 7px 0;
    margin: 0;
    & strong {
      text-transform: uppercase;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 0;
  text-transform: uppercase;
  & div {
    min-width: 500px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 30px;
  }
  & a {
    color: #fff;
  }
`;
