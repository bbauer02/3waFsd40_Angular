function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}


function showWheels(constructor: Function) {
    constructor.prototype.showWheels = () => { console.log("Il y a 4 roues")};
}

@showWheels
class Bike {

    @readonly
    speed() {
        return 8;
    }
}

let bike = new Bike;

bike.speed = () => 5;
bike.showWheels();

const Bike_js = {
    // speed : function() { return 18; }
    speed : () => { return 18; }
}


Bike_js.speed = () => { return 100; }



/*
const Bike = {
    speed : () => { return 8; }
}


* */