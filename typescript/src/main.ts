type desFunction = 'fullName' | 'firstName' | 'lastName'

function first(value: { name: string, pname: string }) {
    return function (target: any, propertyKey: desFunction, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            return value
        }
    }
}

class Person {

    constructor(private name: string, private pnam: string, private age: number) { }

    @first({
        name: "Juste",
        pname: "Marion"
    })
    fullName(greetings: string) {
        return `${greetings} ${this.name} ${this.pnam}`;
    }
}

const pns = new Person('Chelsea', 'MVOLO', 16);

console.log(pns.fullName('Bienvenue'));