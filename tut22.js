console.log('welcome to tut22');

class employee{
    constructor(givenName,givenExperience,givenSalary) {
        this.name=givenName;
        this.experience=givenExperience;
        this.salary=givenSalary;
    }

    slogan() {
        return`hello this is ${this.name} and this company is the best`;
    }

    joiningyear() {
        let a=new Date();
        let b=a.getFullYear();
        return b-this.experience;
    }

    //static method that can used even if the object is not created OR you can say that it is method don't take any object value as parameter
    static add(a,b) {
        return a+b;
    }
}

let emp=new employee('rohan',23,2);
console.log(emp);
console.log(employee.add(1,2));

class Programmer extends employee{
    constructor(givenName,givenExperience,givenSalary,givenLanguage,givenGithub){
        super(givenName,givenExperience,givenSalary);
        this.language=givenLanguage;
        this.github=givenGithub;
    }

    favoriteLanguage() {
        return `${this.name} favorite language is ${this.language}`;
    }
}

let prog=new Programmer('rohan',23,2,'javascript','sudharmjadhav2004');
console.log(prog);