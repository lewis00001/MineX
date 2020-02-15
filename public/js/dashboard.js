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

setTimeout(function () {
  var rockets = [];
  $.get("/api/all/rockets", function (data) {
    console.log("getting rockets", data);
    rockets = data;
    console.log(rockets);
  });
  var minerals = [];
  $.get("/api/all/minerals", function (data) {
    console.log("getting minerals", data);
    minerals = data;
    console.log(minerals);
  })
}, 1500);


$(document).ready(function () {
  // listen for mine ores button click
  $(".sell-ores").click(function () {
    calcPercents(4, 4);
  });
});