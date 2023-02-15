numbers = [12, 61, 124, 612, 622, 1, 6, 9, 10, 156]

console.log("В порядке убывания:", numbers.sort((a, b) => b - a).toString().split(',').join(', '));
console.log("В порядке возрастания: ", numbers.sort((a, b) => a - b).toString().split(',').join(', '))