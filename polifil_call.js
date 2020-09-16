Object1={
    name : "hunny",
    age : "22"
}
function full_age(){
    return this.name + this.age ;
}
    var data= full_age.call(Object1);
    console.log('original call--> ', data); 

Function.prototype.MyCall= function(objRef, ...args){
    objRef.func=this;
    console.log(objRef);
    var x = objRef.func(...args);
    return x;
}

var data2=full_age.MyCall(Object1,"alwar" ,"raj");
console.log(data2);

Function.prototype.MyBind = function(...objRef){
    let  func = this;
    return function () {
        return func.apply(objRef[0]);
    }
   
}
var data2=full_age.MyBind(Object1);
console.log(data2);
var x=data2();
console.log(data2());
