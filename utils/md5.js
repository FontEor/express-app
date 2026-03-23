const crypto = require('crypto');

/**
 * Compute MD5 digest of a string as hex.
 * @param {string} value
 * @returns {string}
 */
module.exports = function md5(value = '') {
  return crypto.createHash('md5').update(String(value)).digest('hex');
};
