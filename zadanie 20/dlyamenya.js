(function () {
    console.log('Zapusk');
})();
//
let a = new Function('a', 'b', 'return a + b')
//
function sum(text = 'text', age = 24) {
    console.log(`${text} ${age}`)
}
sum()
//
function zapusk() {
    console.log('zapusk')
}
zapusk()
//
function tal(a, b) {
    return a + b
}