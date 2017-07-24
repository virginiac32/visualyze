export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`
  })
);

export const fetchComments = (artwork_id = null) => {
  $.ajax({
    method: 'GET',
    url: `api/artworks/${artwork_id}/comments`
    // data: (artwork_id ? {artwork_id} : {})
  });
};

export const createComment = (comment) => (
  $.ajax({
    method: 'POST',
    url: 'api/comments/',
    dataType: 'json',
    data: comment
  })
);

export const updateComment = (comment) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = (comment) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
);
