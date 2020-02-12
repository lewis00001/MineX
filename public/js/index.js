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

function isFormFilled(checkThis){
  var checkAllInput = true;
  $(checkThis).each(function(){
    if($(this).val() === "") {
      checkAllInput = false;
    }
  })
  return checkAllInput;
}

document.querySelector("#new-submit").addEventListener("click", function(e) {
  e.preventDefault();
  var newShipForm = ".new-ship-input";
  var isSet = isFormFilled(newShipForm);
  var doPasswordsMatch = true;

  var newShip = {
    firstName: $("#input-first-name").val(),
    lastName: $("#input-last-name").val(),
    password: $("#input-password").val(),
    email: $("#input-email").val()
  };

  if($("#input-password").val() !== $("#input-password-confirm").val()) {
    doPasswordsMatch = false;
    alert("The passwords do not match")
  } else if (isSet && doPasswordsMatch){
    $.post("/api/new", newShip).then(function(data) {
      // console.log(data);

      if(data.id !== undefined){
        window.location.href = "/main/" + data.id;
      } else {
        alert(data);
      }
    });
  } else {
    alert("All fileds are required");
  }
});

document.querySelector("#find-submit").addEventListener("click", function(e) {
  e.preventDefault();

  var newShipForm = ".find-ship-input";
  var isSet = isFormFilled(newShipForm);
 

  var findShip = {
    email: $("#find-email").val(),
    password: $("#find-password").val()
  };

  if(isSet) {
    getUserEmail(findShip.email, findShip.password);
  } else {
    alert("All fileds are required");
  }
});
function getUserEmail(email, password) {
  var emailString = email;
  var passwordString = password;
  $.get("/api/find/" + emailString + "/" + passwordString, function(data) {
    window.location.href = "/main/" + data.id;
  });
}
