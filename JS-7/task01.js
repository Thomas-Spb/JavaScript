'use strict';

{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (allStudents, failedStudents) => {
    const passed = allStudents.filter(students => !failedStudents.includes(students));

    console.log(passed);
  };

  filter(allStudents, failedStudents);
}

// {
//   const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
//   const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

//   let student,
//     badStudent = '';
//   const pStudent = [];

//   for (student of allStudents) {
//     for (badStudent of failedStudents) {
//       if (student !== badStudent) {
//         // console.log(badStudent);
//         // console.log(student);
//         pStudent.push(student);
//       }
//     }

//     console.log(pStudent);
//   }

//   function getStudents(a, b) {
//     let array = [];

//     for (student of allStudents) {
//       console.log(student);
//     }

//     for (let i = 0; i < a.length; i++) {
//       for (let e = 0; e < b.length; e++) {
//         if (a[i] === b[e]) array.push(a[i]);
//       }
//     }
//     return array;
//   }

//   console.log('sd', getStudents(allStudents, failedStudents));
// }
