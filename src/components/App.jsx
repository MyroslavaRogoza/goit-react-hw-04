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
import Modal from "react-modal";

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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function selectedImage(image) {
    setModalImage(image);
    openModal();
  }

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

      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>

          <img
            src={modalImage.url}
            alt={modalImage.altDescription}
            width={300}
            height={400}
          />
          <p>{modalImage.description}</p>
          <p>{modalImage.likes}</p>
        </Modal>
      </div>
    </>
  );
}

export default App;
