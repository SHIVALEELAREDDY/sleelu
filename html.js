// let b=200;
// const c=300;
// {
// var a=100;
// let b=200;
// const c=300;
// console.log(a)
// console.log(b)
// console.log(c);
// console.log(a+b+c);
// }

// prime number
// let a=+prompt("enter a digit")
// let count=0
// if(a>=1){
//     for(i=1;i<=a;i++){
//         if(a%i==0){
//             count++
//         } 
//         // console.log(a,);
        
//     }
    
//     if(count==2){
//         console.log(a,"is a prime number")
//     }else{
//         console.log(a,"is not a prime number")
//     }    
//  }
// //  else{
// //     console.log(a,"is a prime number");
    
// }

let a=+prompt("enter a digit");
let count=0;

if(a>=1){
        console.log(a,"is lessthan 1 or equal to 1"); 
}else{
    for(i=1;i<=a;i++){
        if(a%i==0){
            count++
        }
    }
}
if(count==2){
    console.log(a,"is a prime number");
    
}else{
    console.log(a,"is not a prime number");
    
}
 

