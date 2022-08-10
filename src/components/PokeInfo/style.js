import styled from "styled-components";

export const DivData = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  left: 41%;
  top: 74.3%;
  font-size: 130%;

  .pokemonName {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
  }

  @media (max-width: 425px) {
    top: 74.3%;
  }

  @media (max-width: 375px) {
    top: 74.5%;
  }

  @media (max-width: 320px) {
    top: 73.5%;
  }
`;
