import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import getGalleryByQuery from "../gallery-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [imageName, setImageName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState({});

  function loadMoreCounter() {
    setPage(page + 1);
  }

  function findImage(image) {
    setImageName(image);
  }
  useEffect(() => {
    async function fetchGallery() {
      try {
        setError(false);
        setLoader(true);
        // setGallery([]);
        const images = await getGalleryByQuery(imageName, page);
        console.log(images.data.results);
        setGallery((prevGallery) => {
          return [...prevGallery, ...images.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchGallery();
  }, [imageName, page]);

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function selectedImage(image) {
    setModalImage(image);
    openModal();
  }
  // Modal.setAppElement();
  return (
    <>
      <SearchBar findImage={findImage} />
      {gallery.length > 0 && (
        <ImageGallery gallery={gallery} selectedImage={selectedImage} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {gallery.length > 0 && <LoadMoreBtn loadMoreCounter={loadMoreCounter} />}
      <ImageModal modalImage={modalImage} />

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
      <ImageModal
        modalImage={modalImage}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
}

export default App;
