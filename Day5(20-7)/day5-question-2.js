class User {
	constructor(name,age,email) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.courses = [];
	}

	login() {
		console.log(`${this.name} has logged in`);
	}
	logout() {
		console.log(`${this.name} has logged out`);
	}
}

let user1 = new User('Lakshmi',19,'abcd123@gmail.com');
let user2 = new User('Haritha',19,'efgf456@gmail.com');

user1.login();

class Moderator extends User{
	constructor(name,age,email) {
		super(name,age,email);
		this.addCoins = 0;
        this.removeCoins = 0;
	}
	addingCoins() {
        this.addCoins++;
        console.log(`${this.name} has added ${this.addCoins} coins`);
        return this;
    }
    removingCoins() {
        this.removeCoins--;
        return this;
    }   
}
let mod = new Moderator("Chinmaie",16,"abc@gmail.com");
mod.addingCoins();
let mod1 = new Moderator("Mahalakshmi",40,"ra@gmail.com");
mod1.addingCoins();

class Admin extends Moderator{
	addCourse(user,course) {
		user.courses.push(course);
		console.log(user);
	}
}
let admin = new Admin("Sanjana",20,"sanjana123@gmail.com");

let users = [user1,user2,mod,mod1];
users.forEach(element => {
	console.log(element);
});

admin.addCourse(user1,"javascript");
admin.addCourse(user2,"web development");
admin.addCourse(user1,"java");
admin.addCourse(user2,"python");