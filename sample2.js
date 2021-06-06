function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.name = function () {
    this.Header();
    return this.firstName + " " + this.lastName
};

Person.prototype.Header = function () {
    console.log("*******************");
}


const person = new Person("srikanth", "dasari", 37, "black")
console.log(person.name())