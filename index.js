/**
 * fx-info-utils
 * A minimal utility package.
 */
function pipsValue(amount, pipSize = 0.0001) {
  return amount * pipSize;
}

module.exports = { pipsValue };
