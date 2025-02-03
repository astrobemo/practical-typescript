function processData(input: string | number, config: {reverse_property : boolean} ){
    if(typeof input === 'string'){
        return input.split('').reverse().join('');
    }
    if(typeof input === 'number'){
        return input.toString().split('').reverse().join('');
    }
}