var buttonZoek = document.getElementById("zoekButton");
var zoekbalk = document.getElementById("zoekbalk");

if(buttonZoek){
zoekbalk.classList.toggle("hide");

buttonZoek.addEventListener("click", function() {
    zoekbalk.classList.toggle("hide");
})
}

var button = document.getElementById("duurzaamheid");
var element = document.getElementById("duurzaamheidInhoud");
if (element){
element.classList.toggle("hide");

button.addEventListener("click", function() {
    element.classList.toggle("hide");
})
}

var button2 = document.getElementById("kingLouie");
var element2 = document.getElementById("kingLouieInhoud");
if (element2){
element2.classList.toggle("hide");

button2.addEventListener("click", function() {
    element2.classList.toggle("hide");
})
}
var button3 = document.getElementById("service");
var element3 = document.getElementById("serviceInhoud");
if (element3){
element3.classList.toggle("hide");

button3.addEventListener("click", function() {
    element3.classList.toggle("hide");
})
}
var button4 = document.getElementById("contact");
var element4 = document.getElementById("contactInhoud");
if (element4){
element4.classList.toggle("hide");

button4.addEventListener("click", function() {
    element4.classList.toggle("hide");
})

}

var buttonGegevens = document.getElementById("gegevens");
var elementGegevens = document.getElementById("gegevensInhoud");
if (elementGegevens){
elementGegevens.classList.toggle("hide");

buttonGegevens.addEventListener("click", function() {
    elementGegevens.classList.toggle("hide");
})
}

var buttonMeerInformtie = document.getElementById("meerInformatie");
var elementMeerInformatieInhoud = document.getElementById("meerInformatieInhoud");
if (elementMeerInformatieInhoud){
elementMeerInformatieInhoud.classList.toggle("hide");

buttonMeerInformtie.addEventListener("click", function() {
    elementMeerInformatieInhoud.classList.toggle("hide");
});
}
var buttonVerzending = document.getElementById("verzending");
var elementVerzendingInhoud = document.getElementById("verzendingInhoud");
if (elementVerzendingInhoud){
elementVerzendingInhoud.classList.toggle("hide");

buttonVerzending.addEventListener("click", function() {
    elementVerzendingInhoud.classList.toggle("hide");
});

}
