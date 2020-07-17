let num = prompt("Enter marks");
if (num < 40) {
	console.log("Marks are " + num + " and grade is F");
}
else if (num < 60) {
	console.log("Marks are " + num + " and grade is B");	
}
else if (num < 80) {
	console.log("Marks are " + num + " and grade is A");
}
else if (num < 100) {
	console.log("Marks are " + num + " and grade is A+");
}

/*Same code using switch...
let num = prompt("Enter marks");
switch(true)
{
	case num < 40:
	console.log("Marks are " + num + " and grade is F");
	break;

	case num < 60:
	console.log("Marks are " + num + " and grade is B");
	break;

	case num < 80:
	console.log("Marks are " + num + " and grade is A");
	break;

	case num < 100:
	console.log("Marks are " + num + " and grade is A+");
	break;
}*/