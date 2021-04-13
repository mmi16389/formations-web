function identity<T extends { name: string }>(arg: T): T {
    return arg;
}

let tpString = identity(null);
// console.log(typeof tpString);

/**
 * 
 * @param name 
 * @param message 
 */
function arrowFunction(name: string, pname: string, message: (name: string, pname: string) => void) {
    message(name, pname);
}

let str = arrowFunction('papa', 'maman', (e, f) => {
    console.log(' resui avec success ')
})

