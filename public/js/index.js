// Get the modal
var modalNew = document.getElementById("myNewModal");
var modalFind = document.getElementById("myFindModal");

// Get the button that opens the modal
var btnNew = document.getElementById("btn-new-ship");
var btnFind = document.getElementById("btn-find-ship");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnNew.onclick = function(e) {
  e.preventDefault();
  modalNew.style.display = "block";
};

// When the user clicks on the button, open the modal
btnFind.onclick = function(e) {
  e.preventDefault();
  modalFind.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalNew.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
  modalFind.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modalFind) {
    modalFind.style.display = "none";
  } else if (event.target === modalNew) {
    modalNew.style.display = "none";
  }
};

document.querySelector("#new-submit").addEventListener("click", function(e) {
  e.preventDefault();
  var newShip = {
    firstName: $("#input-first-name").val(),
    lastName: $("#input-last-name").val(),
    password: $("#input-password").val(),
    email: $("#input-email").val()
  };

  $.post("/api/new", newShip).then(function(data) {
    window.location.href = "/main/" + data.id;
  });
});

document.querySelector("#find-submit").addEventListener("click", function(e) {
  e.preventDefault();
  var findShip = {
    email: $("#find-email").val(),
    password: $("#find-password").val()
  };
  getUserEmail(findShip.email, findShip.password);
});
function getUserEmail(email, password) {
  var emailString = email;
  var passwordString = password;
  $.get("/api/find/" + emailString + "/" + passwordString, function(data) {
    window.location.href = "/main/" + data.id;
  });
}
