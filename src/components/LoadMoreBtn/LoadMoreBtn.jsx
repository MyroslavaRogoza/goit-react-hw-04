import React, { forwardRef } from "react";

const LoadMoreBtn = ({ loadMoreCounter }) => {
  return (
    <button type="button" onClick={loadMoreCounter}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

