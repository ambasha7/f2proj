/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
function PrintStudentswithMap() {
  arr.map(function(student){
    if( student.marks > 50 ){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  arr.forEach(function(student){
    if(student.marks > 50 ){
      console.log(student)
    }
  });
}

function addData() {
  let newStudent = {id:4, name:"susan", age:"20" , marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
 let failed_Students = arr.filter((student) => student.marks < 50)
 console.log(failed_Students);
}

function concatenateArray() {
  let new_Arr = [
    { id: 4, name: "basha", age: "22", marks: 90 },
    { id: 5, name: "pujith", age: "23", marks: 60 },
    { id: 6, name: "eshwar", age: "24", marks: 70 },
  ];

  let concatenated_Arr = arr.concat(new_Arr);
  console.log(concatenated_Arr);
}
