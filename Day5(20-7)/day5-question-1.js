let num = prompt("Enter a positive number");
let arr=[];
var n = parseInt(num);
var a = 1;
while(a < n+1) {
	arr.push(a++);
}
console.log(arr);
//filtering odd numbers from the above array
let odd = arr.filter(el=>el%2!=0);
console.log(odd);

//cubes of above filtered numbers
let oddCubes = arr.filter(el=>el%2!=0).map(el=>Math.pow(el, 3));
console.log(oddCubes);