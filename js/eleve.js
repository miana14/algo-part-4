class Eleve {
    constructor(nom, prenom, classe){
    this.nom = nom;
    this.prenom = prenom;
    this.classe = classe;
    this.notes = {maths :[], algo:[], js:[]};
    }
    bonjour() {
        alert(`Bonjour, je suis ${this.prenom} ${this.nom} et je suis en ${this.classe}`);
    }
}