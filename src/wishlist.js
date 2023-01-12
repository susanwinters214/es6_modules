import Car from './car';


class Wishlist{
    constructor(list = [], nextId = 0)

    add(make, model, year) {
        nextId = ++this.nextId;
        make = Car.make;
        model = Car.model;
        year = Car.year;

        // Adds the car instance to this.list
    }

    remove(carId) {
        carId = this.carId;

        // Removes the car instance whose id matches carId from this.list
        
    }
}

export default Wishlist;