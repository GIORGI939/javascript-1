// task1
let user1 = { 
    name1:`ანა`,
    age1:`28`
}
let user2 = {
    name2 : `ლევანი`,
    age2 : `21`
}

// let difference = `ანა ლევანზე 7 წლით უფროსია`
// console.log(difference);
// console.log(user1.age1-user2.age2);
let difference = user1.age1-user2.age2;
let resultat = `${user1.age1} ${user2.age2}ზე ${difference}ით უფროსია`
console.log(resultat);


// task2
// კენტის შემთხვევაში
const studentsNames = [`John`,`Sam`,`Ann`,`Will`,`Andrew`,`Joseph`,`Lorelai`,`Amelie`,`Den`];
// let studentebisSaxelebi=studentsNames.length;
// let midlletName=studentsNames[studentsNames.length-5];
// console.log(midlletName);
// let midlletName1=studentsNames[4]
// console.log(midllename1);
let middle=studentsNames[(studentsNames.length -1) /2]
console.log(middle);
// ლუწის შემთხვევაში
const studentsNames1 = [`John`,`Sam`,`Ann`,`Will`,`Andrew`,`Joseph`,`Lorelai`,`Amelie`];
let middle1=studentsNames1[studentsNames1.length/2]
console.log(middle1);
// მარჯვენა სახელის დაბრუნება
const studentsNames2 = [`John`,`Sam`,`Ann`,`Will`,`Andrew`,`Joseph`,`Lorelai`,`Amelie`];
let middle2 = studentsNames2[(studentsNames2.length -2 ) /2]
console.log(middle2);
// მარცხენა სახელის დაბრუნება

// task3
const student = {
    firstName:`john`,
    lastName:`Smith`,
    age:`20`,
    subject: [math,economy,physic,statistic,history],
    roommate:{fullName: `Jonathan Card`, age:`21`},
}
for(let i = 0; i < student.subject.length; i++) {
    console.log(student.subject[i]);
}
const fullName = `${student.firstName} ${student.lastName}`
student.FulName =fullName
console.log(fullName);
const result = `${student.firstName} ${student.lastName} is ${student.age} and his roommate ${student.roommate.fullName}`
console.log(result);

// task4
const fruitsNumbers = ["Banana","Orange","Apple","Mango",2,12];
let p = 0
while(typeof fruitsNumbers[p] == `string`){
console.log(fruitsNumbers[p]);
p++
}



// task5
const numbers = [12,23,43,11,9,2,121,90]
if(numbers > 31 && numbers % 2 == 0){
    console.log('Element is greater than provided value and is EVEN');
}
else{
    console.log('Element is less than provided value and is ODD');
}

