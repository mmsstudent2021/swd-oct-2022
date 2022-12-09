
const fruits = {
    apple : 100,
    orange : 120,
    mango : 200,
    banana : 30
}

let total = 0;


// tax တွက်တယ်ဆိုတာ ရာခိုင်နူန်းပေါမူတည်ပြီးကြည့်တာ
// 5%tax 100 သုံးရင် 5ကျပ် နိုင်ငံတော်ကိုပေးရမယ်
// (100/100)*5 => 100 * 0.05 

function tax(amout,taxRate = 5){
    return amout*(taxRate/100)
}

function buy(fruitName,quantity){
    let cost = quantity * fruits[fruitName];
    // let acutalCost = cost + tax(cost);
    total += cost;
    // return fruitName+" : "+quantity+" : "+cost+" mmk";
    return `${ fruitName } : ${quantity} = ${cost} mmk`;
}

console.log(buy('orange',5))
console.log(buy('apple',2))
console.log(buy('mango',3))
console.log(buy('banana',15))

console.log("Total Cost : ",total," mmk")
console.log("Tax : ",tax(total)," mmk")
console.log("Net Total : ",total+tax(total)," mmk")
// console.log(tax(700))