

function Friend(name, age, hobby) {
	this.name = name,
	this.age = age,
	this.hobby = hobby
}

var georg = new Friend("Georg", 27, "reading");

console.log(georg)




function Animal(name, foodType, kingOfJungle) {
	this.name = name,
	this.foodType = foodType,
	this.kingOfJungle = kingOfJungle
}

var monkey = new Animal("monkey", "everything", false);

var {name} = monkey;

console.log(monkey);