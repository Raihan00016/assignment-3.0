// function filterActiveUsers(users) {
//     if (!Array.isArray(users) || users.length === 0 || typeof users != "object") {
//         return "Invalid"
//     }

//     // const hasInvalidUser = users.some(user => !(typeof "isActive" ))
//     // if (hasInvalidUser) {
//     //     return "Invalid";
//     // }
//     return users.filter(user => user.isActive === true);
// }




function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid"
    }

    const filtered1 = users.some(user => typeof user.isActive === "undefined")
    if (filtered1) {
        return "Invalid";
    }

    const filtered = users.filter(user => user.isActive == true)
    return filtered;
}
// const keys = Object.keys(users)
// if (!keys.includes("isActive")) {
//     return "Invalid"
// }


console.log(filterActiveUsers([{ name: "A", isActive: true }, { name: "B", isActive: false }]));
// [{name:"A", isActive:true}]

console.log(filterActiveUsers([]));
// Invalid

console.log(filterActiveUsers([{ name: "A" }]));
// Invalid

console.log(filterActiveUsers("users"));
// Invalid

console.log(filterActiveUsers([{ "name": "A" }]))