export const fetchAnnotation = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/annotations/${id}`
  })
);

export const fetchAnnotations = (artwork_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/artworks/${artwork_id}/annotations`
  });
};

export const createAnnotation = (annotation) => {
  return $.ajax({
    method: 'POST',
    url: 'api/annotations/',
    dataType: 'json',
    data: annotation
  });
};

export const updateAnnotation = (annotation) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/annotations/${annotation.id}`,
    data: { annotation }
  });
};

export const deleteAnnotation = (annotation) => (
  $.ajax({
    method: 'DELETE',
    url: `api/annotations/${annotation.id}`
  })
);
