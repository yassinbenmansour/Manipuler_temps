var d = new Date("2022-03-25T20:00:00Z");



function refreshTime() {
    var tempsCourant = document.getElementById("temps-actuel");
    var d = new Date();
    tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

refreshTime();
var compteurTemps = setInterval(refreshTime, 1000); // 1000ms <=> 1s

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(compteurTemps);
});

document.getElementById("start").addEventListener("click", function() {
    refreshTime();
    compteurTemps = setInterval(refreshTime, 1000); // 1000ms <=> 1s
});
