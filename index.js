
var names = [
    'Alice', 'Bob', 'Charlotte', 'Daniel', 'Eliza', 'Frank', 
    'Gertrude', 'Harry', 'Ingrid', 'Jack', 'Lisa', 'Michael', 
    'Nancy', 'Oscar', 'Patricia', 'Quentin', 'Rachel', 'Sam',
    'Traci', 'Ulric', 'Vicky', 'Winston', 'Xanthe', 'Yanni', 'Zelda'
];

var idx = 0;

function generate() {
    var n = names[idx];
    idx = (idx + 1) % names.length;
    return n;
}

module.exports = {
    generate: generate
}
