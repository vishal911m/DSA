// Space Complexity

// O(1) Space Complexity
const funnyNumber = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

let score = [420, 96, 12, 69, 77];

// console.log(funnyNumber(score));

// O(n) Space Complexity
const funnyNumberArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 69);
  }
  return array;
};

// console.log(funnyNumberArray(5));

// Primitive Types ->
// Boolean, num, undefined, null => Constant
// String, arrays, objects => dynamic

// O(n^2) Space Complexity
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

[[1, 2, 3], [], []];

// example usage
const matrix = createMatrix(3);
// console.log(matrix);


// #####################################################################################################################################
// ChatGPT code with console logs

function createMatrix1(n) {
  console.log("Starting matrix creation with size:", n);

  let matrix = [];
  console.log("Initial matrix:", matrix);

  for (let i = 0; i < n; i++) {
    console.log(`\n➡ Creating row ${i}`);

    matrix[i] = [];
    console.log(`Row ${i} initialized as empty array:`, matrix[i]);

    for (let j = 0; j < n; j++) {
      console.log(`  - Filling cell [${i}][${j}] with value: ${i} + ${j} = ${i + j}`);

      matrix[i][j] = i + j;

      console.log(`  - Current state of row ${i}:`, matrix[i]);
    }

    console.log(`✔ Finished row ${i}:`, matrix[i]);
  }

  console.log("\n🎉 Final Matrix:", matrix);
  return matrix;
}

// example usage
const matrix1 = createMatrix1(3);
console.log("\nReturned matrix:", matrix1);
