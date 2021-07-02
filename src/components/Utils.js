export const utils = {
    // Suma un array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    // crea un array de numeros entre mix y max
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // elija un número aleatorio entre el mínimo y el máximo 
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Elije una suma aleatoria (<max) del conjunto de todas las sumas disponibles en arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[utils.random(0, sums.length - 1)];
    },
};