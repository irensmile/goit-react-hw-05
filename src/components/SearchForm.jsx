import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

export const SearchForm = ({ onSearch }) => (
  <>
    <form
      className={css.container}
      onSubmit={(e) => {
        e.preventDefault();
        const value = e.target[0].value;
        if (value === "") toast("Search string is empty");
        else onSearch(value);
      }}
    >
      <input className={css.input}></input>
      <button type="submit">Search</button>
    </form>
    <Toaster />
  </>
);

export default SearchForm;
