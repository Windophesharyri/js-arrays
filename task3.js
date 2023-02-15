students = ["Григорьев А.П.", "Артемьев Г.Ч.", "Иванов П.П.", "Семёнов Р.С.", "Никулин Д.А.", "Циалковский К.Э."]
grade = [76, 84, 45, 100, 66, 100]
averageGrade = 0

if (students.length != grade.length) {
    console.log("Числа в массивах не одинаковые");
}
else {
    for (let i = 0; i < grade.length; i++) {
        averageGrade += grade[i]
    }
    console.log("Средняя отметка: ", averageGrade / grade.length)
    i = 0
    while (i < grade.length) {
        if (grade[i] < 60) {
            console.log("Отметка студента", students[i], "- F")
        }
        if (grade[i] < 70 && grade[i] > 60) {
            console.log("Отметка студента", students[i], "- D")
        }
        if (grade[i] < 80 && grade[i] > 70) {
            console.log("Отметка студента", students[i], "- C")
        }
        if (grade[i] < 90 && grade[i] > 80) {
            console.log("Отметка студента", students[i], "- B")
        }
        if (grade[i] <= 100 && grade[i] > 90) {
            console.log("Отметка студента", students[i], "- A")
        }
        i++
    }
}