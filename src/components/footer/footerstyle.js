import styled, { css } from "styled-components";

export const Box = styled.div`
  background: #105573;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 1000px;
  margin-left: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 21px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
