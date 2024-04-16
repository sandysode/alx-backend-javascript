/**
 * A new instan of WeakMap
 */
export const weakMap = new WeakMap();

/**
 * Tracks the num of calls made to an API's endpoint.
 * @function
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
