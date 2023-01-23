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

