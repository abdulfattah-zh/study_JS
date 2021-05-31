let num = 266219,
    numArray,
    sum = 1;
numArray = String(num);
numArray = numArray.match(/.{1}/g);
console.log(numArray);
for (let i = 0; i < numArray.length; i++) {
    sum = sum * numArray[i];
    console.log(sum);
}
numArray = 0;
sum = (sum * sum) * sum;
numArray = String(sum);
// numArray = numArray.match(/.{1}/g);
console.log("Число :  " + numArray);
console.log("Число :  " + numArray.substr(0, 2));