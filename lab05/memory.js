const os = require('os');
function displayMemoryUsage() {
    const totalMemory = os.totalmem(); 
    const freeMemory = os.freemem();  
    const freeMemoryPercentage = ((freeMemory / totalMemory) * 100).toFixed(2);
    console.log(`Total Memory: ${(totalMemory / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Free Memory: ${(freeMemory / (1024 ** 3)).toFixed(2)} GB`);
    console.log(`Percentage of Free Memory: ${freeMemoryPercentage}%`);
}
setInterval(displayMemoryUsage, 5000);
