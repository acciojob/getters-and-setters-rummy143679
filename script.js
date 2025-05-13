//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get Name(){
		return this.name;
	}

	set Name(n){
		this.name = n;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
	}

	void study(){
		console.log(`${super.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}

	void teach(){
		console.log(`${super.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
