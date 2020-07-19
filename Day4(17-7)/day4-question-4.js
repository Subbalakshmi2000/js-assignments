let operation = prompt("select anyone from +, -, *, /, sqrt, %");
if (operation=='+' || operation=='-' || operation=='*' || operation=='/') {
	let str = prompt("Enter two numbers");
	var res = str.split(" ");
	if (operation=='+') {
		var sum = +res[0] + +res[1];
		console.log("Sum of given two numbers is " + sum);
	}
	else if (operation=='-') {
		var difference = +res[0] - +res[1];
		console.log("difference of given two numbers is " + difference);
	}
	else if (operation=='*') {
		var product = +res[0] * +res[1];
		console.log("product of given two numbers is " + product);
	}
	else if (operation=='/') {
		var quotient = +res[0] / +res[1];
		console.log("division of given two numbers is " + quotient);
	}
}

else if (operation=="sqrt" || operation=="%") {
	if (operation=="sqrt") {
	let str2 = prompt("Enter a number");
	console.log("square root of " + +str2 + " is " + Math.sqrt(+str2));
	}
	else if (operation=="%") {
		let str3 = prompt("Enter percent and number");
		var res1 = str3.split(" ");
		var result = ((+res1[0])/100) * +res1[1];
		console.log(+res1[0] + " % " + +res1[1] + " = " + result);
	}
}