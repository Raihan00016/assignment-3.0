// p-1

// function studentIntroduction(student) {
//     if (
//         typeof student !== "object" ||
//         student === null ||
//         Array.isArray(student) ||
//         !("name" in student) ||
//         !("age" in student) ||
//         !("course" in student)
//     ) {
//         return "Invalid";
//     }

//     return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
// }


// console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }));
// // Output: My name is Rafi. I am 18 years old. I am learning JavaScript.

// console.log(studentIntroduction({}));
// // Output: Invalid

// console.log(studentIntroduction("student"));
// // Output: Invalid

// console.log(studentIntroduction(null));
// // Output: Invalid

// console.log(studentIntroduction([1, 2, 3]));
// Output: Invalid



// p-2



function filterActiveUsers(users) {
    // Check if input is a valid array
    if (!Array.isArray(users)) {
        return "Invalid";
    }

    // Check if array is empty
    if (users.length === 0) {
        return "Invalid";
    }

    // Check if every object has the isActive property
    const allHaveIsActive = users.every(user =>
        user !== null && typeof user === "object" && user.hasOwnProperty("isActive")
    );

    if (!allHaveIsActive) {
        return "Invalid";
    }

    // Filter only active users
    return users.filter(user => user.isActive === true);
}


console.log(filterActiveUsers([{ name: "A", isActive: true }, { name: "B", isActive: false }]));
// [{name:"A", isActive:true}]

console.log(filterActiveUsers([]));
// Invalid

console.log(filterActiveUsers([{ name: "A" }]));
// Invalid

console.log(filterActiveUsers("users"));
// Invalid