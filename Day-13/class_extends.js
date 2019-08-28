class Pizza {
    constructor(name) {
        this.name = name;
    }

    dough() {
        console.log('create dough');
    }

    topping() {
        console.log('Add chease');
    }

    bake() {
        console.log('Bake Pizza');
    }

    package() {
        console.log('put in box')
    }

    make() {
        console.log('#####', this.name);
        this.dough();
        this.topping();
        this.bake();
        this.package();
    }
}

class SweetPotatoPizza extends Pizza {
    topping() {
        super.topping();
        console.log('Add sweet potato');
    }
}


const pizza1 = new Pizza('Chese Pizza');
pizza1.make();

const pizza2 = new SweetPotatoPizza('SweetPotato Pizza');
pizza2.make();
