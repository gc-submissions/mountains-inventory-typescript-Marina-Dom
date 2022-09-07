interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
]; 

export function findNameOfTallestMountain(array: Mountain[]){
    let tallest= array[0];

    array.forEach((element) => {
        if(element.height > tallest.height){
            tallest = element;
        } 
    });
    return tallest;
}
console.log(findNameOfTallestMountain(mountains));