function processData(input: string | number, config: {reverse_property : boolean} = {reverse_property: true} ){
    if(typeof input === 'string'){
        return input.split('').reverse().join('');
    }
    if(typeof input === 'number'){
        return input.toString().split('').reverse().join('');
    }
}