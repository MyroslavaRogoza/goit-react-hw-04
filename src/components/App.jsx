import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import getGalleryByQuery from "../gallery-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const [imageName, setImageName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [loadMore, setLoadMore] = useState(0);

  function findImage(image) {
    console.log(image);
    setImageName(image);
  }
  useEffect(() => {
    async function fetchGallery() {
      try {
        setError(false);
        setLoader(true);
        const images = await getGalleryByQuery(imageName);
        console.log(images.data.results);
        setGallery(images.data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchGallery();
  }, [imageName]);

  return (
    <>
      <SearchBar findImage={findImage} />
      {gallery && <ImageGallery gallery={gallery} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {gallery && <LoadMoreBtn />}

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          error: {
            duration: 2000,
            style: {
              background: "#1355bf",
              color: "#fff",
              fontSize: "12px",
            },
          },
        }}
      />
    </>
  );
}

export default App;
