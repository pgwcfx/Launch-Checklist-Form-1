// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");

         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[4].name}</li>
               <li>Diameter: ${json[4].diameter}</li>
               <li>Star: ${json[4].star}</li>
               <li>Distance from Earth: ${json[4].distance}</li>
               <li>Number of Moons: ${json[4].moons}</li>
            </ol>
            <img src="${json[4].image}">
         `;
         
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit",function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let CopilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let fuelUpdate = document.getElementById("fuelStatus");
      let launchUpdate = document.getElementById("launchStatus");
      let faultyItemsUpdate = document.getElementById("faultyItems");
      let cargoUpdate = document.getElementById("cargoStatus");
      let pilotUpdate = document.getElementById("pilotStatus");
      let copilotUpdate = document.getElementById("copilotStatus");
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if (!isNaN(pilotNameInput.value) || !isNaN(CoPilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Incorrect data type!");
      }
      pilotUpdate.innerHTML = `Pilot ${pilotNameInput} is ready for launch.`;
      copilotUpdate.innerHTML = `Copilot ${copilotNameInput} is ready for launch.`;
      if (fuelUpdate.value < 10000) {
         faultyItemsUpdate.style.visibility = "visible";
         launchUpdate.style.color = "red";
         launchUpdate.innerHTML = "Shuttle not ready for launch.";
         fuelUpdate.innerHTML = "There is not enough fuel for the journey.";
      } else if (cargoUpdate.value > 10000) {
         faultyItemsUpdate.style.visibility = "visible";
         launchUpdate.style.color = "red";
         launchUpdate.innerHTML = "Shuttle not ready for launch";
         cargoUpdate.innerHTML = "There is too much mass for the shuttle to take off.";
      } else if (fuelUpdate.value > 10000 && cargoUpdate.value < 10000) {
         launchUpdate.style.color = "green";
         launchUpdate.innerHTML = "Shuttle is ready for launch.";
      }

   });

});