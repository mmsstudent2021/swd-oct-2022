
const fruits = ["apple","orange","mango","banana","grape","lemon","coconet"];

// for(let i=0;i < fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit)
// }

// for(index in fruits){
//     console.log(index,fruits[index])
// }

// const mgmgInfo = {
//     name : "mg mg",
//     age : 15,
//     job : "student"
// }

// for(key in mgmgInfo){
//     console.log(key,mgmgInfo[key])
// }

const ratings = [
    {
        id:1,
        name : "Mg Mg",
        rate : 3
    },
    {
        id:2,
        name : "Kyaw Kyaw",
        rate : 5
    },
    {
        id:3,
        name : "Hla Hla",
        rate : 1
    },
    {
        id:4,
        name : "Zaw Zaw",
        rate : 3
    },
    {
        id:5,
        name : "Mya Mya",
        rate : 4
    },
    {
        id:6,
        name : "Ko Ko",
        rate : 2
    },
    {
        id:7,
        name : "Hein Htet Zan",
        rate : 4
    },
];


for(rating of ratings){
    // console.log( rating.id, rating.name, rating.rate)
    for(key in rating){
        console.log(key, rating[key])
    }
    console.log("- - - - - - - - - -")

}