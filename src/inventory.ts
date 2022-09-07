import {Product} from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

// class InventoryItem {
//     product: Product;
//     quantity: number;

//     constructor(product: Product, quantity: number){
//         this.product = product;
//         this.quantity = quantity;
//     }
// }

// let myProduct = new product();
// console.log(InventoryItem);
// let myItem(InventoryItem) = new InventoryItem("Motor", 10.00);

let inventory: InventoryItem[] = [
    {name: "motor", price: 10.00, quantity: 10},
    {name: "sensor", price: 12.50, quantity: 4},
    {name: "LED", price: 1.00, quantity: 20},
];

function calcInventoryValue (array: InventoryItem[]){
    let total = 0;

    for (const element of array) {
        total + (element.price * element.quantity);
    }

    return total / array.length;
}

console.log(calcInventoryValue(inventory));
