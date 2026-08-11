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


console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))