//new Set([1,1,2,2,3,4])
{1,2,3,4}


//[...new Set("referee")].join("")

//ref 

//let m = new Map();
//m.set([1,2,3], true);
//m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

let hasDuplicate = array => new Set(array).size !== array.length;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function vowelCount(string) {
    let vowels = 'aeiou';
    let vowelMap = new Map();
    for (let letter of string) {
        letter = letter.toLowerCase();
        if (vowels.includes(letter)) {
            if (vowelMap.has(letter)) {
                vowelMap.set(letter, (vowelMap.get(letter) + 1));
            }
            else {
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap;
}
