let num = prompt("Enter a number greater than 100");
while(true) {
	if(+num > 100 || num == "" || num == null) {
		break;
	}
	else if(+num <= 100) {
		prompt("please enter a number greater than 100");
	}
}