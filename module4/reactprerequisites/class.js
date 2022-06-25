class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log(`hi my name is ${name}`);
    }
}

//here teacher inherits the properties of person
class Teacher extends Person{
    constructor(name,age,Rollno){
        //super is the properties of parent that is person
        super(name,age),
        this.Rollno = Rollno
    }
}

class Student extends Teacher{
    constructor(name,age,Rollno,id){
        super(name,age,Rollno),
        this.id = id
    }
}

let student = new Student("shreya",20,198,33);
console.log(student)
// let person = new Person("Shreya",20);
// console.log(person);

// let teacher = new Teacher("Shreya",20,198);
// console.log(teacher);