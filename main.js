let misterio = document.getElementById("Misterio");

let final1 = document.getElementById("Final1");

let final2 = document.getElementById("Final2");

let final3 = document.getElementById("Final3");

final1.addEventListener("click", function() {
    misterio.textContent = `Andrea extrañada lo recibe... Era el cafe exactamente como le gustaba, se lo toma y, en el momento que lo termina siente una paz interior, como si todos sus problemas y preocupaciones se hayan esfumado.`
});

final2.addEventListener("click", function() {
    misterio.textContent = "Andrea incomoda lo rechaza... Al hacerlo el mesero sorprendido pero con una cara de preocupación le pide por favor casi rogando que lo reciba para que no le pase nada. ¿Qué debería hacer Andrea?"
});

final3.addEventListener("click", function() {
    misterio.textContent = "Andrea al ver al mesero en frente con lo que ella iba a pedir intenta irse, al ir hacia la puerta la chica que la habia recibido le pide que por favor no lo haga. ¿Qué debería hacer Andrea?"
});