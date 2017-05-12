import getOneComment from "./get-one-comment";
import createComment from "./create-comment";


function loadAllComments() {
  // 1) Long way
  const webRequestPromise = fetch("/comments");
  const convertToJsonPromise = webRequestPromise.then((response) => {
    console.log("Contact response",response);
    return response.json();
  });
  convertToJsonPromise.then((data) => {
    console.log("Comment data",data);
    document.getElementById("numberOfComments").innerHTML = data.length;
  });

  // 2) Short way
  fetch("/comments").then(function (response) {
    return response.json();
  }).then((data) => {
    document.getElementById("numberOfComments2").innerHTML = data.length;
  });
}
loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {
  document.getElementById("firstComment").innerHTML = data.body;
});



window.makeComment = function () {
  createComment({
    body: "Created Comment!",
    postId: 3
  }).then(function (data) {
    loadAllComments();
  });
};
