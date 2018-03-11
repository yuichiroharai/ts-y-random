export function generateAscendIntArray(length, start=0) {
    let i, result;

    result = [];
    for (i=0; i<length; i++) {
        result[i] = i + start;
    }
    return result;
}

export function generateRandomIntArray(length, start=0) {
    let i, j, ascend, random;

    ascend = generateAscendIntArray(length, start);
    random = [];
    while (i = ascend.length) {
        j = (Math.random() * i | 0);
        random.push(ascend.splice(j,1)[0]);
    }
    return random;
}