//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get Name(){
		return this._name;
	}

	set Name(n){
		this._name = n;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age)
	}

	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}

	teach(){
		console.log(`${this._name} is teaching`)
	}
}



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
