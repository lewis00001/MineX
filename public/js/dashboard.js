var rockets = document.querySelectorAll(".rocket");
var currentRocket = document.querySelector("#rocketName").textContent;
console.log(currentRocket);

for (var i = 0; i < rockets.length; i++) {
  // element.classList.contains(class);
  if (rockets[i].classList.contains("current-rocket")) {
    rockets[i].classList.remove("current-rocket");
  }
}
document.getElementById(currentRocket).classList.add("current-rocket");
