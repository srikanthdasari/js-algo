// Prototype inheritance chain

function Bear(type) {
    this.type = type;
}

Bear.prototype.growl = function () {
    console.log('This ' + this.type + ' bear says grrrrr');
}

function Grizzly() {
    Bear.call(this, 'grizzly');
}

Grizzly.prototype = Object.create(Bear.prototype);
// Grizzly.prototype.growl = function () {
//     console.log("on the grizzly prototype");
// }

var grizzly = new Grizzly();
var polar = new Bear('polar');

// grizzly.growl = function () {
//     console.log("override");
// }
console.log(grizzly.growl());
console.log(polar.growl());