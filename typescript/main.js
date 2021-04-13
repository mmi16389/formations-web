function identity(arg) {
    return arg;
}
var tpString = identity(null);
// console.log(typeof tpString);
/**
 *
 * @param name
 * @param message
 */
function arrowFunction(name, pname, message) {
    message(name, pname);
}
var str = arrowFunction('papa', 'maman', function (e, f) {
    console.log(' resui avec success ');
});
