const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
  function countCalculation(school) {
      return {
          mathTeachersCount: school.departments.math.teachers,
          historyTeachersCount: school.departments.history.teachers,
          mathStudentsCount: school.departments.math.students,
          historyStudentsCount: school.departments.history.students
      };
  }
  
//   console.log(countCalculation(school));
  // Output: {  
  //   mathTeachersCount: 5,
  //   historyTeachersCount: 3,
  //   mathStudentsCount: 150,
  //   historyStudentsCount: 100
  // }
  

  function findTopStudent(school, subject) {
    var topStudent = school.students[0]; // Initialize with the first student
    var highestScore = topStudent.scores[subject]; // Initialize highest score
    
    for (var i = 1; i < school.students.length; i++) {
        var student = school.students[i];
        if (student.scores[subject] > highestScore) {
            highestScore = student.scores[subject];
            topStudent = student;
        }
    }
    
    return topStudent;
}

// console.log(findTopStudent(school, 'math'));
// Output: { 
//   name: 'Alice', 
//   className: 'Grade 5', 
//   scores: { math: 95, science: 88, history: 85, english: 92 } 
// }


const newDepartment = {
    name: "art",
    teachers: 2,
    students: 50,
  };
  
  function addNewDept(school, newDepartment) {
      school.departments[newDepartment.name] = {
          teachers: newDepartment.teachers,
          students: newDepartment.students
      };
  
     school.courses.push(newDepartment.name);
  
      return school;
  }
  
//   console.log(addNewDept(school, newDepartment));


function highestStudentCountDepartment(school) {
    var highestDepartment = null;
    var highestCount = 0;

    for (var dept in school.departments) {
        var studentCount = school.departments[dept].students;
        if (studentCount > highestCount) {
            highestCount = studentCount;
            highestDepartment = dept;
        }
    }

    return highestDepartment;
}

// console.log(highestStudentCountDepartment(school)); // Output: 'math'

function generateGreeting(name, language = "English") {
  var greeting;
  
  switch (language) {
      case "Spanish":
          greeting = "¡Hola, " + name + "!";
          break;
      case "French":
          greeting = "Bonjour, " + name + "!";
          break;
      case "English":
      default:
          greeting = "Hello, " + name + "!";
          break;
  }
  
  return greeting;
}

// Example invocations
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"



