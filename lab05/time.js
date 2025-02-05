const os = require('os');
function formatUptime() {
    const uptimeInSeconds = os.uptime(); 
    const days = Math.floor(uptimeInSeconds / (60 * 60 * 24)); 
    const hours = Math.floor((uptimeInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((uptimeInSeconds % (60 * 60)) / 60); 
    console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
}
formatUptime();
