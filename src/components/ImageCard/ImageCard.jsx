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
            altDescription: item.alt_description,
            description: item.description,
            likes: item.likes,
            author: item.user.name,
          })
        }
      />
    </div>
  );
};

export default ImageCard;
