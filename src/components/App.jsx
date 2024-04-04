import { useState, useEffect, useRef } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import getGalleryByQuery from "../gallery-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import WarningWindow from "./WarningWindow/WarningWindow";

function App() {
  const [imageName, setImageName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState({});

  function loadMoreCounter() {
    setPage(page + 1);
  }

  function findImage(image) {
    setImageName(image);
  }
  useEffect(() => {
    if (imageName.length === 0) return;
    async function fetchGallery() {
      try {
        setError(false);
        setLoader(true);
        const images = await getGalleryByQuery(imageName, page);

        setGallery((prevGallery) => {
          if (prevGallery === null) return [...images.data.results];
          else return [...prevGallery, ...images.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchGallery();
  }, [imageName, page]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function selectedImage(image) {
    setModalImage(image);
    openModal();
  }

  function cleanGallery() {
    setGallery(null);
  }
  return (
    <>
       
          <SearchBar findImage={findImage} cleanGallery={cleanGallery} />
 
      <main>
        {gallery && (
          <ImageGallery gallery={gallery} selectedImage={selectedImage} />
        )}
        {loader && <Loader />}
        {error && <ErrorMessage />}
        {gallery && <LoadMoreBtn loadMoreCounter={loadMoreCounter} />}
        <ImageModal modalImage={modalImage} />
        <WarningWindow />
        <ImageModal
          modalImage={modalImage}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </main>
    </>
  );
}

export default App;
