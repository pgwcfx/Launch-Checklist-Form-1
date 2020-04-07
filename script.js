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
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let CoPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      pilotNameInput.innerHTML = "new text";
      CoPilotNameInput.innerHTML = "new text";
      fuelLevelInput.innerHTML = "new text";
      cargoMassInput.innerHTML = "new text";
      let faultyItemsInput = document.querySelector("input[id=faultyItems]");
      let pilotStatusInput = document.querySelector("input[id=pilotStatus]");
      let copilotStatusInput = document.querySelector("input[id=copilotStatus]");
      let fuelStatusInput = document.querySelector("input[id=fuelStatus]");
      let launchStatusInput = document.querySelector("input[id=launchStatus]");
      let cargoStatusInput = document.querySelector("input[id=cargoStatus]");
      if (!isNaN(pilotNameInput.value) || !isNaN(CoPilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Incorrect data type!");
         event.preventDefault();
      }
      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      alert("submit clicked");
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
         /*
         <div id="launchStatusCheck">
            <h2 style="color: red">id="launchStatus">Shuttle not ready for launch.</h2>
            <div id="faultyItems">
               <ol>
                  <li id="pilotStatus">{pilotName.value} is NOT ready for launch</li>
                  <li id="copilotStatus">{copilotName.value} is NOT ready for launch</li>
                  <li id="fuelStatus">There is not enough fuel for the journey.</li>
                  <li id="cargoStatus">Cargo mass low enough for launch</li>
               </ol>
            </div>
         </div>
         */
      } else if (fuelLevel.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
         /*
         <div id="launchStatusCheck">
            <h2 style="color: red">id="launchStatus">Shuttle not ready for launch.</h2>
            <div id="faultyItems">
               <ol>
                  <li id="pilotStatus">{pilotName.value} is NOT ready for launch.</li>
                  <li id="copilotStatus">{copilotName.value} is NOT ready for launch.</li>
                  <li id="fuelStatus">There is not enough fuel for the journey.</li>
                  <li id="cargoStatus">There is too much mass for the shuttle to take off.</li>
               </ol>
            </div>
         </div>
         */
      } else if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
         /*
         <div id="launchStatusCheck">
            <h2 style="color: green">id="launchStatus">Shuttle is ready for launch.</h2>
            <div  id="faultyItems">
               <ol>
                  <li id="pilotStatus">{pilotName.value} is ready for launch.</li>
                  <li id="copilotStatus">{copilotName.value} is ready for launch.</li>
                  <li id="fuelStatus">Fuel level high enough for launch</li>
                  <li id="cargoStatus">Cargo mass low enough for launch</li>
               </ol>
            </div>
         </div>  
         */
      }

   });

});