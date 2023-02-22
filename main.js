class Deferred {
    #functions = [];

    constructor() {
    }

    then(fn) {
        this.#functions.push(fn);
    }

    resolve(arg) {
        this.#functions.forEach(fn => arg = fn(arg));
    }
}

const d = new Deferred()
d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');