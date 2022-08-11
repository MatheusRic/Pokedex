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

  .back {
    position: absolute;
    right: 20.5%;
    top: 15%;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    background-color: #444;
    color: white;
    box-shadow: -2px 3px 0 #222;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      box-shadow: inset -4px 4px 0 #222;
    }
  }
`;
