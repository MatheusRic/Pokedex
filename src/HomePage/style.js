import styled from "styled-components";

export const TagDiv = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 2%;

  .pokedex {
    margin-top: -3%;
    width: 70%;
    max-width: 800px;
    border-radius: 3%;
  }

  .pokemon {
    position: absolute;
    height: 91%;
  }

  .pokemonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 30%;
    height: 22%;
    left: 34%;
    top: 45%;
  }
`;
