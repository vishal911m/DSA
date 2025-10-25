// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

// function hammingDistance(x,y) {
//     if (x.length !== y.length) {
//         throw new Error("Strings must be of same length")
//     }

//     let distance = 0;

//     for (let i = 0; i < x.length; i++){
//         if (x[i] !== y[i]) {
//             distance++
//         }
//     }

//     return distance
// }

// console.log(hammingDistance("hello","hello"));

// ChatGPT code with console logs
function hammingDistance(x, y) {
    console.log(`Input strings: "${x}" vs "${y}"`);

    // 1. Validate same length
    if (x.length !== y.length) {
        throw new Error("Strings must be of same length");
    }

    let distance = 0;

    // 2. Compare characters one by one
    for (let i = 0; i < x.length; i++) {
        console.log(`Comparing position ${i}: "${x[i]}" vs "${y[i]}"`);

        if (x[i] !== y[i]) {
            distance++;
            console.log(`   -> Different! Distance now = ${distance}`);
        } else {
            console.log(`   -> Same`);
        }
    }

    // 3. Final result
    console.log(`Final Hamming Distance = ${distance}`);
    return distance;
}

// console.log("Result:", hammingDistance("hello", "hwllr"));

function hammingDistance(x, y) {
    x=x.toString(2)
    y=y.toString(2)

    if (x.length < y.length) {
        while(x.length!==y.length) x="0"+x
    } else {
         while(x.length!==y.length) y="0"+y
    }

    let distance = 0;

    for (let i = 0; i < x.length; i++){
        if (x[i] !== y[i]) {
            distance++
        }
    }

    return distance
}

// console.log(hammingDistance(2,9));

// ChatGPT code with console logs
function hammingDistance1(x, y) {
    console.log(`Input numbers: x=${x}, y=${y}`);

    // 1. Convert to binary strings
    x = x.toString(2);
    y = y.toString(2);
    console.log(`Binary representations: x=${x}, y=${y}`);

    // 2. Pad the shorter string with leading zeros
    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
            console.log(`Padding x: ${x}`);
        }
    } else {
        while (x.length !== y.length) {
            y = "0" + y;
            console.log(`Padding y: ${y}`);
        }
    }

    console.log(`After padding: x=${x}, y=${y}`);

    // 3. Compare bit by bit
    let distance = 0;
    for (let i = 0; i < x.length; i++) {
        console.log(`Comparing bit ${i}: x=${x[i]} vs y=${y[i]}`);
        if (x[i] !== y[i]) {
            distance++;
            console.log(`   -> Different, distance now = ${distance}`);
        } else {
            console.log(`   -> Same`);
        }
    }

    // 4. Return result
    console.log(`Final Hamming Distance = ${distance}`);
    return distance;
}

console.log("Result:", hammingDistance1(2, 9));

















