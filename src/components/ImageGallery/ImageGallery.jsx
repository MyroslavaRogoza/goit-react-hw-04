import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ gallery }) => {
  return (
    <ul className={css.ImageGallery}>
      {Array.isArray(gallery) &&
        gallery.map((img) => {
          return (
            <li key={img.preview_photos[0].id} className={css.imageItem}>
              <ImageCard cardPhoto={img.preview_photos[0].urls.small} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
