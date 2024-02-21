import css from "./SearchForm.module.css";

export const SearchForm = ({ onSearch }) => (
  <form
    className={css.container}
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(e.target[0].value);
    }}
  >
    <input className={css.input}></input>
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;
