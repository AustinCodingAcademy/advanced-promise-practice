import getOneComment from "./get-one-comment";
import createComment from "./create-comment";

function theWebRequestIsDone(response) {
  console.log("Comment response: ", response);
  return response.json();
}

function jsonIsReady(data) {
  console.log("Comment data", data);
  document.getElementById("numberOfComments").innerHTML = data.length;
}

function loadAllComments() {
  // 1) Long way
  const webRequestPromise = fetch("/comments");
  const getJsonPromise = webRequestPromise.then(theWebRequestIsDone);
  getJsonPromise.then(jsonIsReady);
  // 2) Short way
  fetch("/comments").then(res => {
    return res.json();
  }).then(data => {
    document.getElementById("numberOfComments2").innerHTML = data.length;
    console.log(data);
  });
}
loadAllComments();

// 3) We can use promises from other modules

getOneComment(1).then(function(data) {
  document.getElementById("firstComment").innerHTML = data.body;
});

window.makeComment = function () {
  createComment({
    body: "ACA is great!",
  }).then(function() {
    loadAllComments();
  });
};
