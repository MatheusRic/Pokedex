import { PokeButton } from "./style";

const Button = ({ setSearch, pokemon, count, setCount }) => {
  const prev = () => {
    if (count > 0) {
      setCount(count > 0 ? (count -= 1) : count);
      setSearch(count.toString());
    }
  };

  const next = () => {
    setCount((count += 1));
    setSearch(count.toString());
  };
  return (
    <PokeButton>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </PokeButton>
  );
};

export default Button;
