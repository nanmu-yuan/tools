let arr = [1,2,[2,5,3],78];
/**
 * 数组扁平化
 */
const unqine = (arr)=>{
    let newArray = [];
    arr.forEach(item =>{
        if(Array.isArray(item)){
            newArray = newArray.concat(item)
        }else{
            newArray.push(item)
        }
    })
    return newArray
}

const unqine2 = (arr)=>{
    let newArray = [];
    newArray = [...arr];

    while(newArray.some(item => Array.isArray(item))){
       newArray = [].concat(...newArray)
    }
    return newArray
}
// console.log(unqine2(arr));
let data = [1,2,3,4,5,6,7,8,95,4,1,2,3,5]
const chunk = (arr,size)=>{
    let temp = [],result = [];
    arr.forEach(item =>{
        if(temp.length ===0){
            result.push(temp)
        }
        console.log(result)
        temp.push(item);
        if(temp.length===size){
            temp = [];
        }
    })
    return result
}
//chunk(data,3)
/**
 * @param arr1
 * @param arr2
 * @descrition  diffence arr 
 * 
 */
// let a = [1,2,3,4,5,6,7,8],b=[1,5,8,9,6,25,1,2,1,2]
// const diffence = (arr1,arr2)=>{
//     let result = [];
//     result = arr1.filter(item =>{
//        return !arr2.includes(item)
//     })
//     return result
// }
// console.log(diffence(a,b))
/**
 * @param arr @type []
 * @param string
 * 
 */
const pull = (arr,...args) =>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(args.includes(arr[i])){
            result.push(arr[i]);
            arr.splice(i,1);
            //i--;
        }
       
    }
    return result
}
// let d = [1,2,3,4,5,6]
// pull(d,1,5,6)
// console.log(d);
/**
 * 
 * @param drop
 */
let cml = [1,2,3,4,5,6];
const drop = (arr,size)=>{
   return arr.filter((item,index)=>{
        return index>=size
    })
}
console.log(drop(cml,5))
