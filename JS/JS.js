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
new propotialStyle({
    target: ".casque",
    reference: "#fond",
    styles: {

        "transform": "translate(${coef*45}vw, ${coef*45}vw)"

    }
});