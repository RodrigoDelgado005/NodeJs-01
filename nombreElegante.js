const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un nombre: ', (name) => {
    const elegant = isElegantName(name);
    console.log(`¿Es un nombre elegante? ${elegant}`);
    rl.close();
});

function isElegantName(name) {
    if (/[A-Z]/.test(name)) {
        return false;
    }
    return name.length > 0 && name.charAt(0) === 'a' && name.charAt(name.length - 1) === 'a';
}
