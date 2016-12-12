import _Promise from 'bluebird';

/**
 * @param {Function} fun 接口
 * @param {Object} options 接口参数
 * @returns {Promise} Promise对象
*/
function Promise (fun, options) {
  options = options || {};
  return new _Promise((resolve, reject) => {
    if (typeof fun !== 'function')
        reject();
    options.success = resolve;
    options.fail = reject;
    fun(options);
  });
}

module.exports = {
  Promise: Promise
}
