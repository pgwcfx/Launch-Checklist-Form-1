// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");

         let i = Math.floor(Math.random()*json.length);
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
               </ol>
               <img src="${json[i].image}">
            `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit",function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let fuelUpdate = document.getElementById("fuelStatus");
      let launchUpdate = document.getElementById("launchStatus");
      let cargoUpdate = document.getElementById("cargoStatus");
      let pilotUpdate = document.getElementById("pilotStatus");
      let copilotUpdate = document.getElementById("copilotStatus");
      let faultyItemsUpdate = document.getElementById("faultyItems");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         faultyItemsUpdate.style.visibility = "hidden";
         event.preventDefault();
      } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Incorrect data type!");
         faultyItemsUpdate.style.visibility = "hidden";
         event.preventDefault();
      } else {
         faultyItemsUpdate.style.visibility = "visible";
         pilotUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotUpdate.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuelUpdate.innerHTML = "Fuel level high enough for launch";
         cargoUpdate.innerHTML = "Cargo mass low enough for launch";
         if (fuelLevelInput.value < 10000) {
            launchUpdate.style.color = "red";
            launchUpdate.innerHTML = "Shuttle not ready for launch.";
            fuelUpdate.innerHTML = "There is not enough fuel for the journey.";
            event.preventDefault();
         } 
         if (cargoMassInput.value > 10000) {
            launchUpdate.style.color = "red";
            launchUpdate.innerHTML = "Shuttle not ready for launch";
            cargoUpdate.innerHTML = "There is too much mass for the shuttle to take off.";
            event.preventDefault();
         } 
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            launchUpdate.style.color = "green";
            launchUpdate.innerHTML = "Shuttle is ready for launch.";
            event.preventDefault();
         }
      }

   });

});