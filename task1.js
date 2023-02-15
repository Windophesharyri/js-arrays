numbers = [71, 5, 67, 12, 52, 512, 12, 124, 65, 10]
previousNum = 0
max = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < previousNum) {
        max = previousNum
    }
    if (numbers[i] > previousNum) {
        max = numbers[i]
    }
    else{
        continue
    }
    previousNum = numbers[i]
}

console.log("Максимальное число в массиве:", max);