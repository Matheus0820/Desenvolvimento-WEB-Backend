const crypto = require('crypto');
const start = Date.now();
function hash() {
 crypto.pbkdf2('senha', 'salt', 100000, 64, 'sha512', () => {
 console.log(`Hash finalizado em: ${Date.now() - start}ms`);
 });
}
hash(); hash(); hash(); hash(); // Execute 4 vezes -> A Libuv tem 4 theread por padrão liberadas