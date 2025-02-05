const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Uptime (in seconds):', os.uptime());
console.log('Total Memory (bytes):', os.totalmem());
console.log('Free Memory (bytes):', os.freemem());
console.log('CPUs:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('System Hostname:', os.hostname());
