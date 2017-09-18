import getOneContact from "./get-one-contact";
import createContact from "./create-contact";

function theWebRequstIsDone(response) {
  console.log("Contact response",response);
  return response.json();

}
function jsonIsReady(data) {
  console.log("Contact data",data);
  document.getElementById("numberOfContacts").innerHTML = data.length;

}

function loadAllContacts() {
  const webRequestPromise = fetch("/contacts");
  const getJsonPromise = webRequestPromise.then(theWebRequstIsDone);
  getJsonPromise.then(jsonIsReady);
}
loadAllContacts();



fetch("/contacts").then(function (response) {
  return response.json();
}).then(function (data) {
  document.getElementById("numberOfContacts2").innerHTML = data.length;  
  console.log(data);
});


getOneContact(1).then(function (data) {
  document.getElementById("contactName").innerHTML = data.name;
});


window.createContact = function () {
  createContact({
    name: "Dale Cooper",
    occupation: "FBI Agent"
  }).then(function () {
    loadAllContacts();
  });    
};

