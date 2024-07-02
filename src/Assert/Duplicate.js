let array1 = [1, 2, 3, 4, 1, 2, 5];

for (let i = 0; i < array1.length; i++) {
  let isDuplicate = false;

  // Check if the element is already in uniqueArray
  for (let j = 0; j < array1.length; j++) {
    if (array1[i] === array1rray[j]) {
      isDuplicate = true;
      break;
    }
  }

  // If not a duplicate, add it to uniqueArray
  if (!isDuplicate) {
    uniqueArray.push(array1[i]);
  }
}

console.log(uniqueArray);
