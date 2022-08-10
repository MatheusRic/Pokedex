import styled from "styled-components";

export const PokeButton = styled.div`
  position: absolute;
  display: flex;
  left: 31%;
  top: 88%;
  width: 40%;

  button {
    margin-right: 1rem;
    width: 50%;
    height: 10%;
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
