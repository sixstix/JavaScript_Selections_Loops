console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }  else if (i % 5 == 0) {
            console.log("BUZZ");
        }   else {
            console.log(i);
        }
    }
}

console.log("Exercise 3:\n==========\n");

let i = 0

while (i < 100) {
    i = i + 1;
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(1 + "FizzBuzz");
        continue;
    }
    if(i % 3 === 0) {
        console.log(1 + "Fizz");
        continue;
    }
    if(i % 5 === 0) {
        console.log(1 + "Buzz");
    }
    console.log(i.toString());

}
console.log("Exercise 4:\n==========\n")

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) +100);

for (let i = 1; i <= n; i++) {
    if (i == value) {
        console.log(`Found ${value}!`);
        break;
    }

    if (i == n) {
        console.log(`Did not find ${value} within 1-${n}..`);
    }
}

  console.log("Exercise 5:/n=========/n")  

  let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
  let end = Math.round(Math.random() * (1000 - 1) + 1);
  let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
       output += "FIZZ"; 
    }   
    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);