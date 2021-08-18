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
/**
 * @params arr 
 * @params callback
 * find 函数封装
 */
let find = (arr,callback)=>{
    let result;
    for(let i = 0;i<arr.length;i++){
        let flag = callback(arr[i],i);
       if(flag){
           result = arr[i];
           break;
       }
    }
   return result?result:undefined;
}
const a = find(arr,function(item){
    return item>99999999999
})
/**
 * forEach  indexOf  进行数组去重
 * 
 */
function equine(arr){
    let result = [];
    arr.forEach(item =>{
        if(result.indexOf(item)<0){
            result.push(item);
        }
    })
    return result
}
 let message = equine(arr);

 function equine2(arr){
     return [...new Set(arr)]
 }
/**
 * @ concat 数组拼接方法封装
 */
function concat(arr,...args){
    args.forEach(item=>{
        if(Array.isArray(item)){
            arr.push(...item)
        }else{
            arr.push(item)
        }
    })
    return arr
}



/**
 * 
 * @ this is footer scky tooer loop berry sick pier asktyle 
 */