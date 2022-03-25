var d = new Date("2022-03-25T20:00:00Z");

//console.log(d);
//d.setFullYear(20223);

//console.log(d);
//console.log(d.getDate());
//console.log(d.getMonth() + 1); // Mois de 0 à 11
//console.log(d.getFullYear());
//console.log(d.getHours());
//console.log(d.getMinutes());
//console.log(d.getSeconds());
//console.log(d.getMilliseconds());

//console.log(d.toString());
//console.log(d.toUTCString());
//console.log(d.toDateString());​

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