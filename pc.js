function studentIntroduction(student) {
    if (
        typeof student !== "object" ||
        student === null ||
        Array.isArray(student) ||
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)
    ) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}


console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }));
// Output: My name is Rafi. I am 18 years old. I am learning JavaScript.

console.log(studentIntroduction({}));
// Output: Invalid

console.log(studentIntroduction("student"));
// Output: Invalid

console.log(studentIntroduction(null));
// Output: Invalid

console.log(studentIntroduction([1, 2, 3]));
// Output: Invalid