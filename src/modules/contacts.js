import getOneContact from "./get-one-contact";
import createContact from "./create-contact";


function loadAllContacts() {
  // 1) Long way
  const webRequestPromise = fetch("/contacts");
  const convertToJsonPromise = webRequestPromise.then((response) => {
    console.log("Contact response",response);
    return response.json();
  });
  convertToJsonPromise.then((data) => {
    console.log("Contact data",data);
    document.getElementById("numberOfContacts").innerHTML = data.length;
  });

  // 2) Short way
  fetch("/contacts").then(function (response) {
    return response.json();
  }).then((data) => {
    document.getElementById("numberOfContacts2").innerHTML = data.length;
  });
}
loadAllContacts();

// 3) We can use promises from other modules
getOneContact(1).then(function (data) {
  document.getElementById("contactName").innerHTML = data.name;
});


window.createContact = function () {
  createContact({
    name: "Dale Cooper",
    occupation: "FBI Agent"
  }).then(function (data) {
    loadAllContacts();
  });
};
