// const arry = [0,8,9,"hjds","(jsdbd)",["j,sjashdj",8526,"%%%%"]]

// console.log(arry);
// // console.log(arry[5][1]);

// // console.log(arry.indexOf(666));

// const newArry = arry.join(" ")

// console.log(newArry);




const obj1 = {1:"a",2:"b"}
const obj2 = {5:"ppl",7:"kkb"}
const obj3 = {4:"lp",6:"wer"}

const obj4 = Object.assign({},obj1,obj2,obj3)

// console.log("1",obj1);
// console.log("2",obj2);
// console.log("3",obj3);
// console.log("4",obj4);

const  obj5 = {...obj1, ...obj2,...obj3}

// console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.values(obj5));