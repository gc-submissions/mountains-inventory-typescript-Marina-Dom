import {Product} from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20},
];

export function calcInventoryValue (array: InventoryItem[]): number{
    let total = 0;

    array.forEach((element) => {
        let itemPrice = element.product.price;
        total += itemPrice * element.quantity;
    });

    return total;
}

console.log(calcInventoryValue(inventory));
