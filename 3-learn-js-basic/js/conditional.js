// conditional statement
// contorl structure
// flow control || control flow

// if(false){
//     console.log("a")
//     console.log("b")
//     console.log("c")
// }else{
//     console.log("this is false")
// }



function canIcome(wakeUpTime){
    // မနက် ၉ နာရီကျောင်းတက်ပါတယ်
    // ၉ နာရီမတိုင်ခင်လာရင် ကျောင်းတက်ရ
    // ၉ နာရီကျော် ကျောင်းမဝင်ရ

    // let result;

    // if(wakeUpTime <= 9){
    //     result = "အတန်းထဲဝင်ပါ";
    // }else{
    //     result = "အတန်းထဲ မဝင်ပါနဲ့";
    // }

    if(wakeUpTime <= 9) { 
        return "အတန်းထဲဝင်ပါ";
     }

    return "အတန်းထဲ မဝင်ပါနဲ့";
}


console.log(canIcome(8))
console.log(canIcome(9.3))
console.log(canIcome(10))
console.log(canIcome(8.6))



let mark = 30;

if(mark >= 80){
    console.log("Distation");
}else if(mark >= 40){
    console.log("Pass");
}else if(mark < 40){
    console.log("Fail")
}