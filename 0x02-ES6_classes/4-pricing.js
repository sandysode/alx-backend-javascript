import Currency from './3-currency';

/**
 * Represents a class Pricing.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   *
   * @param {String} amount - The amount.
   * @param {String} currency - The currency.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * @returns {Currency}
   */
  get currency() {
    return this._currency;
  }

  /**
   * @param {Currency} value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * static method convertPrice.
   *
   * @param {String} amount - The amount.
   * @param {String} conversionRate - The conversionRate.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
