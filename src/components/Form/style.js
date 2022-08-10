import styled from "styled-components";

export const PokeForm = styled.form`
  position: absolute;
  left: 28.5%;
  top: 80%;
  width: 25%;

  input {
    border-radius: 20px;
    border: solid gray;
    width: 172%;
    background-color: #8dc73f;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }

  input::placeholder {
    color: #403d3d;
    font-weight: bold;
  }
`;
