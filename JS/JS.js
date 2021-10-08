/****************/
/* Style proportionnel */
/****************/
/*
	"coef" évolue entre 0 et 1 par rapport à la position haute de l'élément référence.
	Le style s'applique a target via un querySelector (pas all). 
*/
class propotialStyle {
    constructor(data) {
        this.target = document.querySelector(data.target);
        this.reference = document.querySelector(data.reference);
        this.styles = data.styles;
        window.addEventListener("scroll", () => { this.applyStyles() }, { passive: true });
    }
    applyStyles() {
        // if (window.matchMedia("(min-width: 1000px)").matches) {
        let coef = 1 - (this.reference.getBoundingClientRect().top / window.innerHeight);
        if (coef <= 0) { coef = 0; }
        if (coef >= 1) { coef = 1; }

        for (const key in this.styles) {
            this.target.style.setProperty(
                key,
                eval("`" + this.styles[key] + "`")
            );
        };
        // }
    }


}

console.log(document.querySelector(".fond").nextElementSibling);
new propotialStyle({
    target: ".casque",
    reference: "#fond",
    styles: {
        
        "transform": "translate(${coef*40}vw, ${coef*45}vw) rotate(${coef*45}deg)"
    }
})



document.querySelector(".images>.bouton").addEventListener("click", anime)

function anime(){
    document.querySelector(".left").classList.toggle("left2");
    document.querySelector(".right").classList.toggle("right2");
    document.querySelector(".images>.bouton").classList.toggle("bouton2");
    document.querySelector(".Image1").classList.toggle("image1_1");
    document.querySelector(".Image3").classList.toggle("image3_3");
    document.querySelector(".lien").classList.toggle("lien2");
    document.querySelector(".Sp").classList.toggle("Sp2")
    document.querySelector(".textM").classList.toggle("textM2")
}

document.querySelector(".lien").addEventListener("click", anime);


//fonction depuis l'HTML -> True
function texte2(){
    document.querySelector(".textM").classList.add("textM3")
    document.querySelector(".textM").innerText= `fonctionne en bluethoot ! ou part cable !
    peut se rechargé sur un socle transportable`;
};

function texte2_1(){
    document.querySelector(".textM").classList.remove("textM3");
    document.querySelector(".textM").innerHTML = `<div class="textM textM2"></div>`;
};

// Fonctionne depuis le JS ?  -> false

// Fonctionne depuis le HTML -> false 

//document.querySelector(".Image1").addEventListener("mouseenter", texte1);

// function texte1(){
//     document.querySelector(".textM").classList.add("textM4");
//   document.querySelector(".textM").innerText = `<div class="textM textM2"> Dispose d'un socle pour le recharger (permet faire une statue !) </p></div><p>`;
// };

// //document.querySelector(".Image1").addEventListener("mouseleave", texte1_1);

// function texte1_1(){
//     document.querySelector(".textM").classList.remove("textM4");
//     document.querySelector(".textM").innerText += `<div class="textM textM2"></div>`;
// };



