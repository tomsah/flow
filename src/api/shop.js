/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: () => new Promise((resolve) => {setTimeout(() =>  resolve(_products), TIMEOUT)}),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
