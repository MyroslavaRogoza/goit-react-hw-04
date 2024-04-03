import css from "./ImageCard.module.css";
const ImageCard = ({ cardPhoto, altDesc, selectedImage, item }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={cardPhoto}
        alt={altDesc}
        className={css.galleryImage}
        onClick={() =>
          selectedImage({
            url: item.urls.regular,
            description: item.description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
