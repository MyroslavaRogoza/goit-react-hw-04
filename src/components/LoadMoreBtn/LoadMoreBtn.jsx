import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMoreCounter }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={loadMoreCounter}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

