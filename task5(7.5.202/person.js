
class Person {
    constructor(name, age, gender,country,expreices,email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.country=country;
        this.expreices=expreices;
        this.email=email;
    }
    
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getCountry(){
        return this.country;
    }

    getExpreices(){
        return this.expreices;
    }
    getEmail(){
        return this.email;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }
    setExprecies(experience){
        this.expreices=experience;
    }

    setEmail(email){
        this.email=email;
    }
    toString() {
        console.log(`Name: ${this.name},\nAge: ${this.age},\nGender: ${this.gender},\nCountry:${this.country},\nExpreicens: ${this.expreices},\nEmail: ${this.email}`);
    }
}
const result = new Person("san", 24, "male", "India", "threeyears","sk@gmmail.com");
console.log(result.toString());

