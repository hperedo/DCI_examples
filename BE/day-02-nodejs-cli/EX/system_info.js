const os = require('os');

console.log('\u001b[4mSystem Info\u001b[0m:\n');
const systemType = os.type();
const systemRelease = os.release();
const sysArch = os.arch();
const cpuCore = os.cpus().length;
const totalMem = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)  ; // GB
const freeMem = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2)  ; // GB
const usedMem = (totalMem - freeMem).toFixed(2); // GB
const upTime = `${new Date(os.uptime() * 1000).toISOString().substr(11, 8)}`;

console.log(`\u001b[4mSystem Type\u001b[0m: ${systemType}.`);
console.log(`\u001b[4mSystem Release\u001b[0m: ${systemRelease}.`);
console.log(`\u001b[4mSystem Architecture\u001b[0m: ${sysArch}.`);
console.log(`\u001b[4mCPU Cores\u001b[0m: ${cpuCore}`);
console.log(`\u001b[4mCPUs:\u001b[0m`);
os.cpus().forEach((cpu, index) => {
    console.log(`\u001b[33m\tCPU \u001b[32m#${index + 1}\u001b[0m:\n\u001b[4m\t\tModel\u001b[0m: ${cpu.model}.\n\u001b[4m\t\tSpeed\u001b[0m: ${cpu.speed} MHz.`);
});
console.log(`\u001b[4mTotal Memory\u001b[0m: ${totalMem} GB`);
console.log(`\u001b[4mFree Memory\u001b[0m: ${freeMem} GB`);
console.log(`\u001b[4mUsed Memory\u001b[0m: ${usedMem} GB (${(usedMem / totalMem * 100).toFixed(2)}%).`);
console.log(`\u001b[4mUptime\u001b[0m: ${upTime} seconds`);