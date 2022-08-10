import { DivData } from "./style";

const PokeInfo = ({ name, id }) => {
  return (
    <DivData>
      <span className="pokemonId">{id} </span>
      <span className="pokemonName">{name}</span>
    </DivData>
  );
};

export default PokeInfo;
