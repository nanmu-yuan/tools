// 封装map 方法
function map(arr,callback){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i))
    }
    return result;
}
let arr = [1,2,3,4,5,6];
 function reduce(arr,callback){
     let data = arr[0];
     for(let i=1;i<=arr.length-1;i++){
        data = callback(data,arr[i])
     }
     return data;
 }
 let a = reduce(arr,function(res,value){
     console.log(res,value)
     return res+value
 })
