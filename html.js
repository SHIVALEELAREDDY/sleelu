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

let a=+prompt("enter digit here");
let count=0;
for(i=1;i<=a;i++){
    if(a % i==0){
        count++
    }
}
if(count==2){
    console.log(a,"is prime");  
}else{
  console.log(a,"is not prime");
  
}

