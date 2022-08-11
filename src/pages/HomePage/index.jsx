import PokeInfo from "../../components/PokeInfo";
import pokedex from "./pokedex.jpg";
import Form from "../../components/Form";
import Button from "../../components/Buttons";
import { TagDiv } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState(count.toString());
  const [img, setImg] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`)
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
        setCount(res.id);
      })
      .catch((err) => console.log(err));
  }, [pokemon, search]);

  return (
    <TagDiv>
      <button onClick={() => navigate("/")} className="back">
        Back
      </button>
      <img className="pokedex" src={pokedex} alt="pokedex" />
      <div className="pokemonDiv">
        <img src={img} alt="pokemon" className="pokemon" />
      </div>

      <PokeInfo name={pokemon.name} id={pokemon.id} />
      <Form search={search} setSearch={setSearch} />
      <Button
        setSearch={setSearch}
        pokemon={pokemon}
        count={count}
        setCount={setCount}
      />
    </TagDiv>
  );
};

export default HomePage;
