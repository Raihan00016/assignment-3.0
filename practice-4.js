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


console.log(bonusScore([80, 65, 90, 75]))
console.log(bonusScore([100]))
console.log(bonusScore([0, 10]))
console.log(bonusScore([]))
console.log(bonusScore("scores"))
console.log(bonusScore([80, "90", 70]))