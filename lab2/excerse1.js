/**
 * Create a simple Node script that converts 'www.miu.edu' domain name to 
 * the equivalent IP address. (Search and learn 'dns' module, resolve4)
 */

const dns = require('dns');

dns.resolve4('www.miu.edu', (err, address)=> console.log('address is : %j', address));

const options = {ttl:true};

dns.resolve4('www.msd.miu.edu', options, (err, address)=>console.log('msd address is : %j', address));