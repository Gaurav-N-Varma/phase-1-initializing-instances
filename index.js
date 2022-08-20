// Write your code here

// class keyword- creates class
// class has a constructor method
class Dog {
    constructor(name, breed) {
        this.name = name,
        this.breed = breed
    }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees")

class Breakfast {
    constructor(food, drink) {
        this.food = food,
        this.drink = drink
    }
}

let breakfast1 = new Breakfast("Buzz", "greatPyrenees")

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad,
        this.soup = soup,
        this.drink = drink
    }
}

// initialized dessert as private property/field with #
class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
        this.salad = salad,
        this.soup = soup,
        this.entree = entree,
        this.#dessert = dessert
    }
}

// must set private property in class before constructor

// method in JS have dots in front of them
// for example, myArray.forEach is a array method
// method works on the array name
