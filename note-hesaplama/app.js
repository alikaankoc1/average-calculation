let vize = document.getElementById("vize");
let final = document.getElementById("final");
let proje = document.getElementById("proje");
let button = document.getElementById("addBtn");
let ortalama = document.getElementById("ortalama");
let harfNot = document.getElementById("harfNote");

button.addEventListener("click",range);
function range(){
    let vizeTxt = vize.value;
    let finalTxt = final.value;
    let projeTxt = proje.value;
    let sonuc = Math.round((vizeTxt*0.3) + (finalTxt*0.5) + (projeTxt*0.2)) ;
    if(sonuc >= 85 && sonuc <= 100){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "AA";

    }
    else if(sonuc >= 80 && sonuc < 85 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "BA"
    }
    else if(sonuc >= 75 && sonuc < 80 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "BB"
    }
    else if(sonuc >= 70 && sonuc < 75 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "CB"
    }
    else if(sonuc >= 65 && sonuc < 70 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "CC"
    }
    else if(sonuc >= 55 && sonuc < 65 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "DC"
    }
    else if (sonuc >= 50 && sonuc < 55 ){
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "DD"
    }
    else{
        ortalama.innerText = `Ortalamanız: ${sonuc}`;
        harfNot.innerText = "Dersten Kaldınız";
    }
}
   
