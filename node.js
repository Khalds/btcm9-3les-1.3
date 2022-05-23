import os from 'os'

const homedir = os.homedir()
const hostname = os.hostname()
const version = os.version()
const type = os.type()

console.log(homedir);
console.log(hostname);
console.log(version);
console.log(type);