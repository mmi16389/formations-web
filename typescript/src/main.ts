type desFunction = 'fullName' | 'firstName' | 'lastName'

function first(value: { name: string, pname: string }) {
    return function (target: any, propertyKey: desFunction, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            return value
        }
    }
}

class Person {
    age: number;
    constructor(private name: string, private pnam: string, a: number) {
        this.age = a;
    }

    @first({
        name: "bojour",
        pname: "bebe"
    })
    fullName() {
        return `${this.name} ${this.pnam}`;
    }
}

const pns = new Person('Chelsea', 'MVOLO', 16);

console.log(pns.fullName());