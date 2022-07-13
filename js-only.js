const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if(typeof(num1,num2) == 'number'){
    return  num1 + num2; 
  }else{
    return +num1 + +num2;
  }
}

console.log(add(23,24))

console.log(add('2','4'))


button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
