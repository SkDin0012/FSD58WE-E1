//arrow function
//Print odd numbers in an array
const oddnumber=(arr)=>{
    arr.forEach(num=>{
        if(num%2!==0){
            console.log(num);
        }

    });
}
let array=[1,2,3,8,10,12,13,15];
oddnumber(array);

//Convert all the strings to title caps in a string array
const caparray = (array) => {
    return array.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

let SArray = ["the hello verify", "i am a fullstack developer"];
let result = SArray.map(caparray);
console.log(result);

//Sum of all numbers in an array

const sumArray=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;

}
let n= [1, 2, 3, 4, 5];
let result1 = sumArray(n);
console.log(result1);

////return all the primnumber in array

const prime=(n)=>{
    if(n<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
const primaarrau=(A)=>{
    return A.filter(prime);
}

let a=[1,4,7,9,3,5,7,15,14,27,45,41];
let result2=primaarrau(a);
console.log(result2);

//Return all the palindromes in an array

const pailndromes=(pass)=>{
    const len=pass.length;
    for(let i=0;i<len/2;i++){
        if(pass[i]!=pass[len-1-i]){
            return false;
        }
    }
    return true;
}

const pailarray=(str)=>{
    return str.filter(item=>pailndromes(item.toString()));
}
let strarry=[1,1,2,2,3,3,4,4,7,8,103,164];
let arraysresult=pailarray(strarry);
console.log(arraysresult);
