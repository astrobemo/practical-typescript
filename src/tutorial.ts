function processData(
    input: string | number, 
    config: {reverse : boolean} = {reverse: false} 
): number | string | undefined {
    if(typeof input === 'number'){
        return input * input;
    }

    if(typeof input === 'string'){
        return config.reverse 
        ? input.split('').reverse().join('').toUpperCase() 
        : input.toUpperCase();
    }
}

console.log(processData(123)); // 15129
console.log(processData('hello')); // OLLEH
console.log(processData('hello', {reverse: true})); // HELLO