/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    if (students.every(student =>
            typeof students.name == "undefined" &&
            typeof students.score == "undefined" &&
            typeof student.score != "number")) {
        return "Invalid"
    }


    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map(({ name }) => name.toUpperCase());

    return names.slice(0, 3);
}


// if (students.some(student => !student.name || student.score)) {
//     return "Invalid";
// }


console.log(generateLeaderboard([{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }]))
console.log(generateLeaderboard([{ name: "A", score: 70 }, { name: "B", score: 71 }]))
console.log(generateLeaderboard([]))
console.log(generateLeaderboard("students"))
console.log(generateLeaderboard([{ name: "Rafi" }]))
console.log(generateLeaderboard([{ name: "Rafi", score: "90" }]))