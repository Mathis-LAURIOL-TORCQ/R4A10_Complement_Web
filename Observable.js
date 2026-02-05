export class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }

    receive_data() {
        notify(getRandomArbitrary(-10, 40));
    }

    _getRandomArbitrary(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
    
}