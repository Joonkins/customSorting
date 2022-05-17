const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    occupation: "Data Scientist",
    friends: [1, 4],
  },
  {
    id: 3,
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    occupation: "UX Designer",
    friends: [2, 4],
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Johnson",
    age: 55,
    occupation: "CTO",
    friends: [1, 2, 3],
  },
]


function ageSort(users) {
  // Your code here
  // if(users.length <=1) {return users} //base case
  // // console.log(users[0].firstName);

  // const midpoint = Math.floor(users.length / 2)

  // const left = users.slice(0, midpoint)



  // const right = users.slice(midpoint)
  // const leftSorted = ageSort(left)
  // const rightSorted = ageSort(right)

  // return helperAgerSort(leftSorted, rightSorted)

  return users = users.sort((a, b) => a.age - b.age)


  // return users.map((x) => x.firstName)








}

// function helperAgerSort(arrA, arrB) {


//   // Create an empty return array
//   const returnArr = [];

//   // Point to the first value of each array

//   let indexA = 0;

//   let indexB=  0;
//   // While there are still values in each array...

//   while(indexA < arrA.length || indexB < arrB.length){
//     // Compare the first values of each array
//     // Add the smaller value to the return array
//     // Move the pointer to the next value in that array
//     if(indexA === arrA.length){
//       returnArr.push(arrB[indexB]);
//       indexB++
//     }else if(indexB === arrB.length){
//       returnArr.push(arrA[indexA]);
//       indexA++
//     }else if(arrA[indexA]["age"] < arrB[indexB]["age"]){
//       returnArr.push(arrA[indexA]);
//       indexA++
//     } else {
//       returnArr.push(arrB[indexB]);
//       indexB++
//     }

//   }
//   // Return the return array
//   return returnArr//forEach((x) => x["age"])

// }

//console.log(ageSort(users))

function oddEvenSort(arr) {
  // Your code here

  let even = num => num % 2 === 0 // mini function to determine even
  let sorted = arr.sort((a, b) => { // create new sorted array
    if (even(a) && !even(b)) return 1 // if a is even and b is odd, put to back
    if (!even(a) && even(b)) return -1 // if a is odd and b is even, push to front
    return a - b // sort in ascending order
  })
  return sorted
}


arr = [5, 4, 7, 2, 9, 8, 1, 6, 3]
console.log(oddEvenSort(arr))

function validAnagrams(s, t) {
  // Your code here
  let word1 = s.split('').sort().join('')
  let word2 = t.split('').sort().join('')
  if (word1 === word2) return true
  else return false;
  // return s.split('').sort().join('') === t.split('').sort().join("") //solved in one line
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
