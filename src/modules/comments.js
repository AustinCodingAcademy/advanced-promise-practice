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
    // Sets the inner HTML equal to the length of the data.
    document.getElementById("numberOfComments2").innerHTML = data.length;
  });
}
loadAllComments();

// 3) We can use promises from other modules
getOneComment(1).then(function (data) {

  //Makes the html for the ID firstComment equal to the data.body ( data is the
//object being passed through as a parameter, and we call on the body.)
  document.getElementById("firstComment").innerHTML = data.body;
});



window.makeComment = function () {

//When the button to make a Comment is clicked, we call createComment which
// creates a Comment object, then loads all Comments including the new one.
  createComment({
    body: "Created Comment!",
    postId: 3
  }).then(function (data) {
    loadAllComments();
  });
};
