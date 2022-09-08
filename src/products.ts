
export interface Product {
    name: string;
    price: number;
}

export let products: Product[] = [
    {name: "Bike", price: 500},
    {name: "Walkie Talkie", price: 60 },
    {name: "Air Matress", price: 99},
];

export function calcAverageProductPrice(array: Product[]){
    let cost = 0;

    for (const element of array) {
        cost += element.price;
    }

    return cost / array.length;
}

console.log(calcAverageProductPrice(products));
