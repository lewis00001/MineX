// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

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
    username: $("#input-username").val(),
    password: $("#input-password").val(),
    email: $("#input-email").val()
  };
  console.log("Your pressed new ship button");
  console.log(newShip);
});
document.querySelector("#find-submit").addEventListener("click", function(e) {
  e.preventDefault();
  var findShip = {
    username: $("#find-username").val(),
    password: $("#find-password").val()
  };
  console.log("Your pressed find ship button");
  console.log(findShip);
});
