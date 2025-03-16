import * as converters from './index.js';

const args = process.argv.slice(2); 
const inputData = args[1]; 

function convertData() {
    switch (dataType) {
        case 'Object':
            const obj = JSON.parse(inputData); 
            console.log('Object to Array:', converters.objectToArray(obj));
            break;
        case 'Array':
            const arr = JSON.parse(inputData);
            console.log('Array to Object:', converters.arrayToObject(arr));
            break;
        case 'String':
            console.log('String to Boolean:', converters.stringToBoolean(inputData));
            break;
        case 'Boolean':
            console.log('Boolean to String:', inputData === 'true' || inputData === '1' ? 'true' : 'false');
            break;
        default:
            console.log('Unsupported data type');
            break;
    }
}


convertData();
