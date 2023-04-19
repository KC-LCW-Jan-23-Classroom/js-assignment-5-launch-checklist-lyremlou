// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });

  let list = document.getElementById("faultyItems");
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;

    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);

    let cargoLevelInput = document.querySelector("input[name=cargoMass");
    let cargoLevel = Number(cargoLevelInput.value);

    event.preventDefault();

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
