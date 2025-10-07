//task1

// const student = [
//     {
//         name: "John",
//         age: 20,
//         marks: { science: 70, maths: 80, english: 75 }
//     },
//     {
//         name: "Doe",
//         age: 21,
//         marks: { science: 76, maths: 50, english: 65 }
//     },
//     {
//         name: "Smith",
//         age: 22,
//         marks: { science: 60, maths: 9 , english: 55 }
//     }
// ];

// function calculateaverage(student) {
//     for (let i = 0; i < student.length; i++) {
//         let s = student[i];//hr iteration mn hr student ka object aayega
//         let totalmarks = s.marks.science + s.marks.maths + s.marks.english;
//         let average = totalmarks / 3;
//         let grade = " ";
//         if(average >= 90) grade = "A";
//         else if(average >= 80) grade = "B";
//         else if(average >= 70) grade = "C";
//         else if(average >= 60) grade = "D";
//         else grade = "F";

//         if (average >= 70) {
//             document.write("<b>" + s.name + "</b><br>");
//             document.write("Average Marks: " + average + "<br>");
//             document.write(  " passed with good grade :" + grade + "<br><br>");
//         }
//     }
// }

// calculateaverage(student);
//************************************************************** */
//task2
// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.reduce((acc, val) => (val > acc ? val : acc),
//  numbers[0]);
// document.write("Max = " + max + "<br>");
// const min = numbers.reduce((acc, val) => (val < acc ? val : acc),
//  numbers[0]);
// document.write("Min = " + min + "<br>");



// let sum = numbers.reduce((acc, val) => acc + val, 0);// agr multiply krna ho to phr 1 rakhty hain kyun k 0 krny sy wo hr dfa 0 sy multiply ho k 0 output dy ga

// document.write("Sum = " + sum);
// let avg = sum / numbers.length;
// document.write("<br>Average = " + avg);


//************************************************************** */
//task3

// let employees = new Map([
//     ["Ali", new Date("2024-03-15")],
//     ["Sara", new Date("2023-11-10")],
//     ["Ahmed", new Date("2024-07-22")],
//     ["Hina", new Date("2025-01-05")],
//     ["Ali", new Date("2024-03-15")] 
// ]);
// let uniquename = new Set();//ta k duplicate values add na hon
// let referncedate = new Date("2024-01-01");

// function filterEmployees(employees) {
//     for (let [name, obj] of employees) {
//     if (!uniquename.has(name) && obj > referncedate) {//agr set mn name ni hai or date reference date sy badi hai to
//         uniquename.add(name);//toh set mn add kr do
//         document.write(name + " joined on  " + obj.toDateString() + "<br>");}
//     }
// }
// filterEmployees(employees);



