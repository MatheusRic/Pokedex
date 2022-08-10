import { PokeForm } from "./style";

const Form = ({ search, setSearch }) => {
  return (
    <PokeForm>
      <input
        type="search"
        placeholder=" Name or Number"
        required
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
    </PokeForm>
  );
};

export default Form;
