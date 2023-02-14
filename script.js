function Hamburger(size) {
    this.price = size.price;
    this.kaloriynist = size.kaloriynist;
    this.startPriceKal = function () {
        return [this.price, this.kaloriynist];
    }
    this.addModifier = function (modifier) {
        this.modifier = modifier;
        if (this.modifier == 'cheeze') {
            return [this.price += 10, this.kaloriynist += 20];
        }
        else if (modifier == 'salat') {
            return [this.price += 20, this.kaloriynist += 5];
        }
        else if (modifier == 'potato') {
            return [this.price += 15, this.kaloriynist += 10];
        }
        else if (modifier == 'spices') {
            return [this.price += 15, this.kaloriynist += 0];
        }
        else if (modifier == 'mayonez') {
            return [this.price += 20, this.kaloriynist += 5];
        }
    }
}

const small = {
    price: 50,
    kaloriynist: 20
}
const medium = {
    price: 75,
    kaloriynist: 30
}
const big = {
    price: 100,
    kaloriynist: 40
}

let hamburger = new Hamburger(small);
console.log('Ціна:' + hamburger.startPriceKal()[0], 'Калорійність:' + hamburger.startPriceKal()[1]);
let hamburgerMod = hamburger.addModifier('cheeze');
hamburgerMod = hamburger.addModifier('salat');
hamburgerMod = hamburger.addModifier('potato');
console.log('Ціна з начинкою: ' + hamburgerMod[0] + 'грн,', 'Калорійність з начинкою: ' + hamburgerMod[1] + 'kKal');

let hamburger1 = new Hamburger(big);
console.log('Ціна:' + hamburger1.startPriceKal()[0], 'Калорійність:' + hamburger1.startPriceKal()[1]);
let hamburgerMod1 = hamburger1.addModifier('mayonez');
hamburgerMod1 = hamburger1.addModifier('salat');
console.log('Ціна з начинкою: ' + hamburgerMod1[0] + 'грн,', 'Калорійність з начинкою: ' + hamburgerMod1[1] + 'kKal');

let hamburger2 = new Hamburger(medium);
console.log('Ціна:' + hamburger2.startPriceKal()[0], 'Калорійність:' + hamburger2.startPriceKal()[1]);
