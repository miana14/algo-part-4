
class Eleves {
    constructor(nom, prenom, classe, notes) {
        this.nom = nom;
        this.prenom = prenom;
        this.classe = classe;
        this.notes =  new Notes([],[],[]);
    }
}

class Notes {
    constructor(maths, algo, js) {
        this.maths = maths;
        this.algo = algo;
        this.js = js;
    }
}