let str = prompt("Enter sales made by the employee");
var totalCommission = 0;
if(+str > 20000) {
	totalCommission = (0.02 * 5000) + (0.05 * 5000) + (0.07 * 10000) + (0.1 * (+str - 20000));
}
else if (+str >= 10001 || +str <= 20000) {
	totalCommission = (0.02 * 5000) + (0.05 * 5000) + (0.07 * (+str - 10000));
}
else if (+str >= 5001 || +str <= 10000) {
	totalCommission = (0.02 * 5000) + (0.05 * (+str - 5000)); 
}
 else if(+str >= 0 || +str <= 5000) {
	totalCommission = (0.02 * 5000); 
}
console.log("total commission earned by employee is " + totalCommission);