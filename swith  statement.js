    
let  l = 1;

switch (l) {
    case "1":
        l = 1;
        break;
    case 1:
        l = 'one';
        break;
    case 2:
        l = 'two';
        break;

    default:
        l = 'not found';
        break;
}
console.log(`The value is ${l}`);
