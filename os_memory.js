import { freemem } from 'os';


const args = process.argv.slice(2);

const freeMemory = freemem();
const freeMemoryInMB = freeMemory / (1024 * 1024);

console.log(`Bo'sh joy: ${freeMemoryInMB.toFixed(2)} MB`);
