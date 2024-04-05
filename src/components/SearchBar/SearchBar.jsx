import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ findImage, cleanGallery }) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    cleanGallery();
    const userInput = evt.currentTarget.elements.imageName.value.trim();
    if (userInput === "")
      return toast.error(<div>Enter text to search for an image</div>);
    else findImage(userInput);
    if (userInput === userInput) return;
  }
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName"
          className={css.form}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
