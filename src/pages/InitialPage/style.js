import styled from "styled-components";

export const Main = styled.main`
  margin-top: -2.1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokedexLogo {
    width: 40%;
  }

  .pokemonGif {
    width: 10%;
    margin-top: 5%;
    margin-bottom: 6%;
  }

  button {
    width: 30%;
    height: 60px;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    background-color: #444;
    color: white;
    box-shadow: -2px 3px 0 #222;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    box-shadow: inset -4px 4px 0 #222;
  }
`;
