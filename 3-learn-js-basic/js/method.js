const mySelf = {

    // property
    name : "hein htet zam",
    age : 28,
    isSingle : true,

    // method
    teach : function(what,where){
        return this.name+" can teach "+what+" at "+where;
    },

    // method ES6
    learn(anything="anything"){
        return `${this.name} can learn ${this.anything}`;
    },

    showThis : function() {
        // console.log(this.name,this.age,this.learn())
        console.log(mySelf)
    }

}

console.log(mySelf.showThis())

// console.log(mySelf.teach("Frontend Development","MMS IT"))

// console.log(mySelf.learn("backend"))

// console.log(mySelf)

// console.log(this)