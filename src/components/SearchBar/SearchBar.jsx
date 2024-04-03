import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ findImage }) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    const userInput = evt.currentTarget.elements.imageName.value;
    if (userInput.trim() === "")
      return toast.error(<div>Введіть текст для пошуку зображення</div>);
    else findImage(userInput);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="imageName"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
