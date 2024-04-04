import css from './SearchBar.module.css';
import toast from "react-hot-toast";

const SearchBar = ({ findImage, cleanGallery }) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    const userInput = evt.currentTarget.elements.imageName.value.trim();
    if (userInput === "")
      return toast.error(<div>Введіть текст для пошуку зображення</div>);
    else findImage(userInput);
    if (userInput === userInput) return;
    cleanGallery();
  }
  return (
    <header className={css.formCont}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageName"
          className={css.form}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
