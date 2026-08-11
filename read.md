//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if (typeof student !== 'object' ||
        !("name" in student) || !("age" in student) || !("course" in student)
    ) {
        return "Invalid"
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

//Problem-02: Active User Filter
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

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if (typeof caption != "string") {
        return "Invalid"
    }

    const words = caption.split(" ")

    const hashTags = words.filter(word => word.startsWith("#"))

    let longestTag1 = "";

    for (let i = 0; i < hashTags.length; i++) {
        const tag = hashTags[i].slice(1)
        if (tag.length > longestTag1.length) {
            longestTag1 = tag
        }
    }

    return { hashtagCount: hashTags.length, longestTag: longestTag1 }
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid"
    }

    const anotherInvalid = scores.every(score => typeof score === "number")
    if (!anotherInvalid) {
        return "Invalid"
    }

    const bonus1 = scores.map(p => p + 10)

    const total = bonus1.reduce((sum, p) => sum + p, 0)
    return total;

}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
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


