//Modifica la función mergeValues para que sea una función pura.
/*Pura: - Predecible
        - Sin efectos colaterales*/
const MINIMUM = 15;

function mergeValues(arrayOfIntegers) {
        let sum = arrayOfIntegers.reduce((acumulador, valor) => acumulador + valor, 0);
        sum = Math.max(sum, MINIMUM);
        return [sum];
}

let data = [10, 20, 30, 40];
data = mergeValues(data);
console.log(data);

data = [1, 2, 3, 4];
data = mergeValues(data);
console.log(data);
