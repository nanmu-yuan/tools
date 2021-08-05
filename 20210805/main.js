/**
 * @params filter 函数封装
 * 
 */
let filter = (arr,callback)=>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        let flag = callback(arr[i],i)
        flag?result.push(arr[i]):null
    }
    return result
}
let arr = [1,5,6,4444,5,1,7,1,545,455,74,28752114,55,5,54,41]
var x = filter(arr,(item)=>item>20)
console.log(x);