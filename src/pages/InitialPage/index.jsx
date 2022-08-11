import { Main } from "./style.js";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const InitialPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [img, setImg] = useState("");
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  const navigate = useNavigate("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);
        if (
          res["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
            "front_default"
          ] !== undefined
        ) {
          setImg(
            res["sprites"]["versions"]["generation-v"]["black-white"][
              "animated"
            ]["front_default"]
          );
        } else {
          setImg(
            res["sprites"]["versions"]["generation-v"]["black-white"][
              "animated"
            ]["front_default"]
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(randomNumber);

  return (
    <Main>
      <img src={logo} alt="Pokedex Logo" className="pokedexLogo" />
      <img src={img} alt="Pokemon gif" className="pokemonGif" />
      <button onClick={() => navigate("/pokedex")}>Start Pokedex</button>
    </Main>
  );
};

export default InitialPage;
