"use strict";

let string = "safasfjsjsadjsf: $120, asfasfa: $20, asfsaf: $70, afjkoasf : $25"
let indexArray = []
let timeValue = 0

for (let i = 0; i < string.length; i++) {
    timeValue = string[i]
    if (timeValue == "$") {
        indexArray.push(i)
    }
    else {
        continue
    }
}
let result = ""
let timeString = ""
for (let index = 0; index < indexArray.length; index++) {
    for (let i = 0; i < string.length; i++) {
        if (i == indexArray[index]) {
            timeString = string.slice(i + 1, i + 5)
            if (typeof(timeString) != "numbers") {
                timeString.slice(0, timeString.length - 1)
            }
            for (let i = 0; i < timeString.length; i++) {
                if (timeString[-i] !== "numbers") {
                    timeString.slice(0, timeString.length - 1)
                }
                else {
                    continue
                }
            }
            result += timeString
        }
        else {
            continue
        }
    }    
}
console.log(result);
