
function runThisStuff() { 

let takeOff = document.getElementById('takeoff');
let flightStatus = document.getElementById('flightStatus');
let shuttleBackground = document.getElementById('shuttleBackground');
let spaceShuttleHeight = (document.getElementById('spaceShuttleHeight'));
let landing = document.getElementById('landing');
let missionAbort = document.getElementById('missionAbort');
let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');
let rocket = document.getElementById('rocket');

takeOff.addEventListener('click', () => {
   let question =  confirm('Confirm that the shuttle is ready for takeoff?')
    question ? (flightStatus.innerHTML = 'Shuttle in flight!') 
    && (shuttleBackground.style.backgroundColor = 'blue')
    && (spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000) 
    : 
       (flightStatus.innerHTML = 'Ready for takeoff!')
    && (shuttleBackground.style.backgroundColor = 'green')
    && (spaceShuttleHeight.innerHTML = spaceShuttleHeight.innerHTML);       
})

landing.addEventListener('click', () => {
    let landingAlert = alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML = 0;
})

missionAbort.addEventListener('click', () => {
    let abortQuestion = confirm('Confirm that you want to abort the mission?');
    abortQuestion ? (flightStatus.innerHTML = 'Mission aborted!') && (shuttleBackground.style.backgroundColor = 'green') && (spaceShuttleHeight.innerHTML = 0) : (flightStatus.innerHTML = flightStatus.innerHTML) && (shuttleBackground.style.backgroundColor = shuttleBackground.style.backgroundColor) && (spaceShuttleHeight.innerHTML = spaceShuttleHeight.innerHTML)

})

up.addEventListener('click', () => {
    rocket.style.position = "relative";
    rocket.style.bottom = '10px';
    parseInt(spaceShuttleHeight.innerHTML += -10000) ;
})

down.addEventListener('click', () => {
    rocket.style.position = "relative"
    rocket.style.top = '10px'
    parseInt(spaceShuttleHeight.innerHTML += 10000) ;
})

left.addEventListener('click', () => {
    rocket.style.position = "relative"
    rocket.style.right = '10px'
})

right.addEventListener('click', () => {
    rocket.style.position = "relative"
    rocket.style.left = '10px'
})
}

window.addEventListener("load", runThisStuff)

