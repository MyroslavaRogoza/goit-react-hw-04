import css from "./ImageCard.module.css";
const ImageCard = ({ cardPhoto, altDesc }) => {
  return (
    <div className={css.imgContainer}>
      <img src={cardPhoto} alt={altDesc} className={css.galleryImage} />
    </div>
  );
};

export default ImageCard;
