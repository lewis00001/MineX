// underline current rocket
var rockets = document.querySelectorAll(".rocket");
var currentRocket = document.querySelector("#rocketName").textContent;
console.log("Current rocket: " + currentRocket);

for (var i = 0; i < rockets.length; i++) {
  // element.classList.contains(class);
  if (rockets[i].classList.contains("current-option")) {
    rockets[i].classList.remove("current-option");
  }
}

// selects current asteroid based on current rocket
let gAsteroid = document.querySelectorAll(".asteroid");
// holds asteroid to be assigned the current-option class
let cAsteroid;
switch (currentRocket) {
  case "rocket_1": 
    cAsteroid = "asteroid_1";
    break;
  case "rocket_2": 
    cAsteroid = "asteroid_2";
    break;
  case "rocket_3":
    cAsteroid = "asteroid_3";
    break;
  case "rocket_4":
    cAsteroid = "asteroid_4";
    break;
}
console.log("current asteroid: " + cAsteroid);
// clears current asteroid if updated
for (var i = 0; i < rockets.length; i++) {
  if (rockets[i].classList.contains("current-option")) {
    rockets[i].classList.remove("current-option");
  }
}

// underlines current rocket
document.getElementById(currentRocket).classList.add("current-option");
// underlines current asteroid
document.getElementById(cAsteroid).classList.add("current-option");

var rockets = [];
var minerals = [];

setTimeout(function () {
  $.get("/api/all/rockets", function (data) {
    console.log("getting rockets", data);
    rockets = data;
    console.log(rockets);
    document.getElementById("r1-name").innerHTML = rockets[0].name;
    document.getElementById("r1-price").innerHTML = "Price: $" + rockets[0].price;
    document.getElementById("r1-storage").innerHTML = "Storage: " + rockets[0].storage;

    document.getElementById("r2-name").innerHTML = rockets[1].name;
    document.getElementById("r2-price").innerHTML = "Price: $" + rockets[1].price;
    document.getElementById("r2-storage").innerHTML = "Storage: " + rockets[1].storage;
 
    document.getElementById("r3-name").innerHTML = rockets[2].name;
    document.getElementById("r3-price").innerHTML = "Price: $" + rockets[2].price;
    document.getElementById("r3-storage").innerHTML = "Storage: " + rockets[2].storage;

    document.getElementById("r4-name").innerHTML = rockets[3].name;
    document.getElementById("r4-price").innerHTML = "Price: $" + rockets[3].price;
    document.getElementById("r4-storage").innerHTML = "Storage: " + rockets[3].storage;
  });
  $.get("/api/all/minerals", function (data) {
    console.log("getting minerals", data);
    minerals = data;
    console.log(minerals);
  })
}, 1500);



// document.querySelector("#logout").addEventListener("click", function(e) {
//   e.preventDefault();

//   $.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/main/'); 
//   }); 
// });