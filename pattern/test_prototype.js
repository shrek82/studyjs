var Car = (function() {
    var Car = function(model, year, miles) {
        this.model = arguments[0] || 'apple';
        this.year = arguments[1] || 2008;
        this.miles = arguments[2] || 'zjg';
        this.num = arguments[3] || 100;
    };

    Car.prototype.say = function() {
        console.log(this.model + this.year + this.miles + this.num);
    }

    Car.prototype.sum = function() {
        this.num = this.num + 1;
        console.log(this.num);
        return this.num;
    }

    return function(model, year, miles) {
        return new Car(model, year, miles);
    }
})();

var tom = Car('abc');
var boy = Car('zhao');
tom.say();
tom.sum();
tom.sum();
boy.sum();