import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ modalImage, closeModal, modalIsOpen }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className={css.contentStyle}
        style={{
          overlay: {
            backgroundColor: "rgba(35, 31, 31, 0.8)",
          },
        }}
      >
        <div className={css.modalWindow}>
          <img
            src={modalImage.url}
            alt={modalImage.altDescription}
            className={css.modalImage}
          />
          <div className={css.modalContent}>
            <p className={css.modalDescription}>{modalImage.description}</p>
            <p className={css.modalImage}>Likes:{modalImage.likes}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
