
const records = [];

// record => width * breadth = area sqft
// record Object => {width:17+"ft",breadth:60+"ft",area:1020+"sqft"}

function calcArea(width,breadth){
    let area = width * breadth;
    const recordObject = {
        width : width + "ft",
        breadth : breadth + "ft",
        area : area + "sqft"
    }
    records[records.length] = recordObject
    return area+"sqft";
}

console.log(calcArea(17,60))
console.log(calcArea(20,40))
console.log(calcArea(50,90))


//show records
console.table(records)