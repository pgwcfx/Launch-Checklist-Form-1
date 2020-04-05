// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");

         <h2>Mission Destination</h2>
         div.innerHTML = `
            <ol>
               <li>Name: ${json.name[4]}</li>
               <li>Diameter: ${json.diameter[4]}</li>
               <li>Star: ${json.star[4]}</li>
               <li>Distance from Earth: ${json.distance[4]}</li>
               <li>Number of Moons: ${json.moons[4]}</li>
            </ol>
            <img src="${json.image[4]}">
         `;
         
      });
   });
});
let form = document.querySelector("form");
form.addEventListener("submit",function(event) {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let CoPilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   pilotNameInput.innerHTML = "new text";
   CoPilotNameInput.innerHTML = "new text";
   fuelLevelInput.innerHTML = "new text";
   cargoMassInput.innerHTML = "new text";
   console.log(pilotNameInput.innerHTML.trim());
   console.log(coPilotNameInput.innerHTML.trim());
   console.log(fuelLevelInput.innerHTML.trim());
   console.log(cargoMassInput.innerHTML.trim());
})
let faultyItemsInput = document.querySelector("input[id=faultyItems]");
let pilotStatusInput = document.querySelector("input[id=pilotStatus]");
let copilotStatusInput = document.querySelector("input[id=copilotStatus]");
let fuelStatusInput = document.querySelector("input[id=fuelStatus]");
let launchStatusInput = document.querySelector("input[id=launchStatus]");
let cargoStatusInput = document.querySelector("input[id=cargoStatus]");
console.log(faultyItemsInput.innerHTML.trim());
console.log(pilotStatusInput.innerHTML.trim());
console.log(copilotStatusInput.innerHTML.trim());
console.log(fuelStatusInput.innerHTML.trim());
console.log(launchStatusInput.innerHTML.trim());
console.log(cargoStatusInput.innerHTML.trim());
if (pilotNameInput.value === "" || CoPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
   alert("All fields are required!");
   event.preventDefault();
}
if (typeof pilotNameInput.value !== 'string' || typeof coPilotNameInput.value !== 'string' || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
   alert("Incorrect data type!");
    event.preventDefault();
}
alert("submit clicked");
if (fuelLevel.value < 10000) {
   document.getElementById("faultyItems").style.visibility = "visible";
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
} else if (fuelLevel.value > 10000) {
   document.getElementById("faultyItems").style.visibility = "visible";
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
} else {
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
}

