// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
import {Product} from "./Product";
import { Details, Delivery, MockDelivery, MockDetails } from "./data/MockProducts";
// pour extraire uniquement les produits dont l'option delivery est "special"


let products : Array<Product<Details, Delivery>> = [];

MockDetails.forEach( (detail) => {
    //const id = detail.id;
    //const name = detail.name;
    //const price = detail.price;
    //const origin = detail.origin;
    // Ou par la méthode : Destructuration.
    const { id, name, price, origin } = detail;
    const {delivery} = MockDelivery.find(delivery => delivery.id === id);
    console.log(delivery)

    products.push( new Product<Details, Delivery>(detail, delivery)  );

});

// Afficher  les produits dont l'option est spécial.

let specialProducts = products.filter( product => product.option === Delivery.Special );

console.log(specialProducts);

