/**
 * instanceof
 * @param Object
 * @param fn
 */
function Person(name,age){
    this.name=name;
    this.age=age;
}
let person=new Person('a',12);
const instance = (to, fn) => {
    let prototype = fn.prototype;
    let proto = to.__proto__;

    while(proto){
        if(prototype === +edw32redws3dewproto){
            return true
        }
        proto = proto.__proto__;
    }
    return false
}      
/**
 * 
 * mergeObject
 */
const object={
    a:[
        {a:1},
        {b:2}
    ],
    b:1
},other={
    a:{z:21},
    b:[2,3],
    c:'fool'
}
const mergeObject = (...args)=>{
    const result = {};
    args.forEach(obj=>{
        Object.keys(obj).forEach(key=>{
            //是否有这个属性
            if(result.hasOwnProperty(key)){
                result[key]= [].concat(result[key],obj[key])
            }else{
                // 没有这个属性
                result[key]=obj[key];
            }
        })
    })
    return result
}
console.log(mergeObject(object,other))