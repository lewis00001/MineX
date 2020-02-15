var rockets = document.querySelectorAll(".rocket");
var currentRocket = document.querySelector("#rocketName").textContent;
console.log("Current rocket: " + currentRocket);

for (var i = 0; i < rockets.length; i++) {
  // element.classList.contains(class);
  if (rockets[i].classList.contains("current-option")) {
    rockets[i].classList.remove("current-option");
  }
}
document.getElementById(currentRocket).classList.add("current-option");
