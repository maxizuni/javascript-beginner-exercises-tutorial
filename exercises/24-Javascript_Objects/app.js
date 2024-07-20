var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: null
};

var person = {
    name: "John",               
    lastName: "Doe",
    age: 35,                     
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], 
    significantOther: person2   
};

person.luckyNumbers[3] = 33;

var jimmy = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

var family = {
    lastName: "Doe",
    members: [person, person2, jimmy] 
};

function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0;

    for (let member of anArray) {
        for (let number of member.luckyNumbers) {
            sumOfAllLuckyNumbers += number;
        }
    }

    return sumOfAllLuckyNumbers;
}

console.log(addAllFamilyLuckyNumbers(family.members)); 