// for(let i = 1; i <= 5; i++){
//     if(i === 3) continue;
//     console.log(i,"=======")
// }

// 1စ 10ဆုံး တစ်တိုး
// let i = 1; i <= 10; i++


// const letters = ["a","b","c","d","d","f"];

// for(let i = 0; i < letters.length; i++ ){
//     console.log("index",i,"--",letters[i])
// }

// const marks = [54,70,96,85,90,65];
// let totalMark = 0;

// for(let mark=0; mark < marks.length; mark++){
//     console.log(marks[mark])
//     totalMark += marks[mark];
// }

// console.log("total : ",totalMark)
// totalMark
// pass or fail
const mgmgInfo = {
    name : "mg mg",
    age : 15,
    marks : [
        {
            id : 1,
            subject : "Myanmar",
            mark : 54
        },
        {
            id : 2,
            subject : "English",
            mark : 23
        },
        {
            id : 3,
            subject : "Math",
            mark : 96
        },
        {
            id : 4,
            subject : "Chem",
            mark : 35
        },
        {
            id : 5,
            subject : "Phy",
            mark : 90
        },
        {
            id : 6,
            subject : "Bio",
            mark : 65
        }
    ]
}

// အချက်အလက်တွေထက်ထည့်ဖို့
// mgmgInfo.totalMark = 0;
// mgmgInfo.results = {};

// // mgmgInfo.results.myanmar = "success";
// // mgmgInfo.results.english = "success";

// for(let i=0;i<mgmgInfo.marks.length;i++){
//     console.log(mgmgInfo.marks[i].mark);
//     // totalMark ရှာတာ
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
//     // pass or fail စစ်တာ
//     // mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "success" : "fail" 
//     if(mgmgInfo.marks[i].mark >= 40){
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "success";
//     }else{
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "fail";
//     }
// }


// console.log(mgmgInfo)
// console.log(mgmg.marks[3].mark)

function startGenerator(count,element="*"){
    let star = "";
    for(let i=1;i<=count;i++){
        star += element
    }
    return star;
}

// console.log(startGenerator(4,"= "))


// for(let i=1;i<=6;i++){
//     console.log(startGenerator(i,"* "))
// }


// for(let i=6;i>=1;i--){
//     console.log(startGenerator(i,"= "))
// }

// for(let i=1;i<=6;i++){
//     // console.log(startGenerator(i,i%2 === 0 ? "= " : "* "))

//     if(i%2 === 0){
//         console.log(startGenerator(i,"= "))
//     }else{
//         console.log(startGenerator(i,"* "))
//     }
// }

//rating

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

for(let i=0;i<ratings.length;i++){
    let result = "";
    for(let x=1;x<=5;x++){
        if(x <= ratings[i].rate){
            result += "* "
        }else{
            result += "- "
        }
    }
    console.log("id :",ratings[i].id,"|","Rating :",result,"|",ratings[i].rate,"|",ratings[i].name)
}


// for(let i=1;i<=5;i++){
//     let result = "";
//     for(let x=1;x<=5;x++){
//         // if(x <= i){ 
//         //     result += "* "
//         // }else{
//         //     result += "= "
//         // }
//         result += x<=i ? "* " : "- "
//     }
//     console.log(result,i)
// }