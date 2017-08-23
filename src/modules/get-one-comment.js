function getOneComment(id) {
  const promise = fetch(`/comments/${id}`);
  const anotherPromise = promise.then(function (response) {
    return response.json();
  });
  return anotherPromise;
}

export default getOneComment;
