abstract class Vehicule {

    abstract demarrer(arg1: number, arg2:number, arg3:string);
}

class Avion extends Vehicule {
    demarrer(arg1: number, arg2:number, arg3:string) {
        console.log("demarrage avion");
    }
}

class Voiture extends Vehicule {
    demarrer(arg1: number, arg2:number, arg3:string) {
        console.log("demarrage voiture");
    }
}




enum Status {
    Published= "PUB",
    Unpublished = "UNPUB",
    Draft= "DRF"
}

// GET INDEX OF ENUM
//
const indexOfUnpublished = Object.keys(Status).indexOf('Unpublished');
const valueOfUnpublished = Object.values(Status)[indexOfUnpublished]; // ES2017 +++

let state : Status;

state = Status.Draft;


Object.values(Status).forEach((val) => console.log(val))


Status.




BDD => "Publi"

