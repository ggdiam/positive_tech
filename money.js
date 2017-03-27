/**
 * Created by Alexander on 27.03.2017.
 */

function Money(money) {
    /** @type {number} */
    this._amount = 0;
}

/** @type {number} */
Money.prototype.precision = 4;

/*
Для простоты все валюты округляем до 2 знаков т.к. все состоят из 100 частей
rubles - 100 копеек
euros - 100 евроцентов
dollars - 100 центов
pounds - 100 пенсов
yens - 100 сен
 */
/** @type {number} */
Money.prototype.currencyPrecision = 2;

/**
 * @returns {number}
 */
Money.prototype.getAmount = function() {
    var amount = this._amount;

    //вместо
    //amount = amount / Math.pow(10, this.precision);
    //return amount;

    //сначала понижаем до валютной точности
    amount = amount / Math.pow(10, this.precision - this.currencyPrecision);
    //округление до 2 знаков
    amount = Math.round(amount);
    //затем возвращаем окончательный результат
    amount = amount / Math.pow(10, this.currencyPrecision);

    return amount;
};

/**
 * @param {number} amount
 */
Money.prototype.setAmount = function(amount) {
    this._amount = getOperationAmount(amount, this.precision);
};

/** @param {number} money */
Money.prototype.add = function(money) {
    this._amount = this._amount + getOperationAmount(money, this.precision);
};

/** @param {number} money */
Money.prototype.subtract = function(money) {
    this._amount = this._amount - getOperationAmount(money, this.precision);
};

/** @param {number} num */
Money.prototype.multiply = function(num) {
    this._amount = this._amount * num;
};

/** @param {number} num */
Money.prototype.divide = function(num) {
    this._amount = this._amount / num;
};

/**
 * @returns {Money}
 */
Money.prototype.clone = function() {
    var money = new Money();
    money._amount = this._amount;
    return money;
};

/**
 * @param {number} amount
 * @param {number} precision
 * @returns {number}
 */
function getOperationAmount(amount, precision) {
    return amount * Math.pow(10, precision);
}

module.exports = Money;