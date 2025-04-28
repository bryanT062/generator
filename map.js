
const copier = document.getElementById("copier");
let combienCharactere = document.getElementById("i");
copier.addEventListener("click", copiermdp);
const generator = document.getElementById("generator");
generator.addEventListener("click", generatorPassWord , );

const maj = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");//génère des majuscule
const minu = ("abcdefghijklmnopqrstuvwxyz");//génère des minuscule
const number = ("123456789");
const special = ("@&~#([|_^°=}?§");
let regroupe = maj + minu + number + special;
let password = ""; 
let mdpLength = 12;

let includeMaj = true;
let includeMin = true;
let includeNbr = true;
let includeSpec = true;

// Récupération des boutons pour activer/désactiver les catégories
const btnNbr = document.getElementById("btnNbr");
const btnMin = document.getElementById("btnMin");
const btnSpec = document.getElementById("btnSpec");
const btnMaj = document.getElementById("btnMaj");

// Écouteurs d'événements pour les boutons
btnMaj.addEventListener("click", function () {
    includeMaj = !includeMaj;
    if (includeMaj) {
        btnMaj.style.background = "white";
        btnMaj.style.color = "red";
    } else {
        btnMaj.style.background = "#36307a";
    }
    generatorPassWord(); 
});
btnMin.addEventListener("click", function () {
    includeMin = !includeMin;
    if (includeMin) {
        btnMin.style.background = "white";
        btnMin.style.color = "red";
    }
    else {
        btnMin.style.background = "#36307a";
    }
    generatorPassWord();
});
btnNbr.addEventListener("click", function () {
    includeNbr = !includeNbr;
    if (includeNbr) {
        btnNbr.style.background = "white";
        btnNbr.style.color = "red";
    }
    else {
        btnNbr.style.background = "#36307a";
    }
    generatorPassWord();
});
btnSpec.addEventListener("click", function () {
    includeSpec = !includeSpec;
    if (includeSpec) {
        btnSpec.style.background = "white";
        btnSpec.style.color = "red";
    }
    else {
        btnSpec.style.background = "#36307a";
    }
    generatorPassWord();
});


function generatorPassWord() {
    let valeur = parseInt(combienCharactere.value);
    
    if (valeur >= 12 && valeur <= 128) {
        mdpLength = valeur;
    } else {
        alert("Le mot de passe doit contenir entre 12 et 128 caractères !");
        mdpLength = "";
    }
    
    password = "";
    let regroupe = "";
    if (includeMaj) regroupe += maj;
    if (includeMin) regroupe += minu;
    if (includeNbr) regroupe += number;
    if (includeSpec) regroupe += special;

    
    if (regroupe === "") {
        alert("Veuillez sélectionner au moins une catégorie !");
        return;
    }

    for(let i = 0; i <mdpLength; i++){
        let randomNumber = Math.floor(Math.random()* regroupe.length);
        password += regroupe.charAt(randomNumber);
    }
    document.getElementById("mdp").value = password;
    copier.style.background = "#6c757d";
    copier.style.color ="#fff";
   
}
function copiermdp() {
    let inputPassworld = document.getElementById("mdp");

    if (inputPassworld.value.length >= 12){
        inputPassworld.select();
        document.execCommand("copy");
        copier.style.background = "transparent";
        copier.style.color = "#000";
        

    }else {
        alert("Veuillez générer un mot de passe");
    }
}