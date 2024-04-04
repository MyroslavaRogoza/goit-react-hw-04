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
        overlayClasseName={css.overlayStyle}
        portalClassName={css.overlayStyle}
      >
        <div className={css.modalWindow}>
          <img
            src={modalImage.url}
            alt={modalImage.altDescription}
            className={css.modalImage}
          />
        </div>

        <p>{modalImage.description}</p>
        <p>{modalImage.likes}</p>
      </Modal>
    </div>
  );
};

export default ImageModal;
