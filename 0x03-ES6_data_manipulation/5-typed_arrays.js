/**
 * Creates buffer array.
 * @function
 * @param {Number} length - The leng of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The val to be stored.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
