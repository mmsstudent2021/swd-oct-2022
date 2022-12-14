// mmk to usd | 1usd = 2100mmk

// mmk rate
const rates = {
    usd : 2100,
    sgd : 1490,
    eur : 2108
}

// 500usd to ? mmk
// 500 * 2100mmk

// from usd to mmk
function usdToMMK(inputUSD){
    return (inputUSD*rates.usd)+" MMK"
}

// form mmk to any currency
function toMMK(inputAmount,fromCurrency){
    return (inputAmount * rates[fromCurrency])+" MMK";
}

// from any currency to mmk
function toCurrency(inputMMK, currency){
    return (inputMMK / rates[currency])+currency;
}

//from any currency to any currency
// 500 sgd to ? usd
// 500 sdg => mmk => usd

function toAnyCurrency(inputAmount,fromCurrency,toCurrency){

    let mmk = inputAmount * rates[fromCurrency];

    let result = mmk / rates[toCurrency];

    return result+toCurrency;
}


// console.log(usdToMMK(500))

// console.log(toMMK(500,"usd"))
// console.log(toMMK(500,"sgd"))
// console.log(toMMK(500,"eur"))

// console.log(toCurrency(540000,"usd"))
// console.log(toCurrency(6749000,"sgd"))
// console.log(toCurrency(40000,"eur"))

console.log(toAnyCurrency(500,'sgd','usd'))
console.log(toAnyCurrency(1,'sgd','sgd'))
console.log(toAnyCurrency(50,'eur','sgd'))