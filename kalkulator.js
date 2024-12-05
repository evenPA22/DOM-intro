const inpTall1 = document.querySelector("#inpTall1");
const inpTall2 = document.querySelector("#inpTall2");
const btnPluss = document.querySelector("#btnPluss");
const divResultat = document.querySelector("#resultat");

btnPluss.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 + tall2;
    divResultat.innerHTML= sum;
}

btnMinus.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 - tall2;
    divResultat.innerHTML= sum;
}

btnGange.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 * tall2;
    divResultat.innerHTML= sum;
}

btnDele.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 / tall2;
    divResultat.innerHTML= sum;
}

btnPotens.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 ** tall2;
    divResultat.innerHTML= sum;
}
btnProsent.onclick = function() {
    let tall1 = Number (inpTall1.value);
    let tall2 = Number (inpTall2.value);
    let sum = tall1 / tall2 *100;
    divResultat.innerHTML= sum;
}

btnRound.onclick = function() {
    let sum = Number(divResultat.innerHTML);
    divResultat.innerHTML = Math.floor(sum);
}

btnClear.onclick = function() {
     inpTall1.value="";
     inpTall2.value="";
    divResultat.innerHTML= "";
}
