//function filterOutOdds() {
  //  var nums = Array.prototype.slice.call(arguments);
   // return nums.filter(function(num) {
   //   return num % 2 === 0
    //});
  //}

  //refactor:

//  const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

  //findMin(1,4,12,-3) // -3
  //findMin(1,-1) // -1
  //findMin(3,1) // 1

  //function findMin(...args) {
    //return args.reduce(function(highest, current) {
      //  return highest < current ? highest: current;
    //})
  //}

  //let findMin = (...args) => args.reduce((highest, current) => highest < current ? highest: current)


  //function mergeObjects(object1, object2) {
    //return {...object1, ...object2}
  //}

  //let mergeObjects = (object1, object2) => ({...object1, ...object2})


function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map(function(item) {
        return item*2;
    })]
}

/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = items => {
    let randomNum = Math.floor(Math.random()*items.length);
    return [items.slice(0, randomNum), ...items.slice(randomNum + 1)]; 
}

    

/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObject = {...obj}
    newObject[key] = val;
    return newObject;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;
}


/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

let update = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;

}
