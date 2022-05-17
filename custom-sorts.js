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

const arr1 = [11, 1, 101, 10, 100];
const arr2 = [1, 45, 164, 6, 31, 90, 671];

function reverseBaseSort(arr) {
  // Your code here

  //1. get base 10 value first of each element in arr, then, math floor it for whole number

  return arr.sort((a,b) => {
    
    let arr1 = Math.floor(Math.log10(a))
    let arr2 = Math.floor(Math.log10(b))

    if(arr1 === arr2){return a - b}
    // if(arr1 > arr2){

    //   return -1
    else{

      return b-a
    }
  })
}
  //2. create 2 variables that holds the integer
    //a. one uses the log 10
    //b. one uses the result of floor


  //3. if base 10



  //4. base a = base b, sort it ascendingly
  //4b.base b - base a, else sort it descendly




 
  // let base100 = num => {num >= 100} // 
  // // console.log(num);


  // let base10 = num => ((num >= 10) && (num < 100)) 
  // let base1 = num => ((num >= 1) && (num < 10))
  // let sorted = arr.sort((a, b) => { 

  //   if(base100(a)){return 1}

  //   if ((base10(a)) && !(base1(b))) {
  //     return 1
  //   }else if((!base10(a)) && (base1(b))) {
  //     return -1}

  // })




console.log(reverseBaseSort(arr1))
console.log(reverseBaseSort(arr2))


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
