import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ gallery, selectedImage}) => {
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(gallery) &&
        gallery.map((item) => {
          return (
            <li key={item.id} className={css.imageItem}>
              <ImageCard
                cardPhoto={item.urls.small}
                item={item}
                selectedImage={selectedImage}
              
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
