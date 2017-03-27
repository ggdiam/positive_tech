/**
 * Created by Alexander on 27.03.2017.
 */
/*
Калькулятор валюты

Описание
В магазине покупатель выбрал 4 товара со следующими ценами.
В результате сформировалась корзина,

*/


//Все ошибки вычислений вылезут при работе с дробными суммами
const selectedCart = [
    // { price: 0.1 },
    // { price: 0.2 },
    { price: 1 },
    { price: 20 },
    { price: 45 },
    { price: 67 },
    { price: 1305 }
];

/*
Магазин в котором совершается покупка интернациональный и каждый клиент может выбрать
любую валюту, с помощью которой будет осуществлять оплату.
Список доступных валют: rubles, euros, dollard, pounds, yens (базовой валютой является dollar)

Цель
рассчитать общую цену для каждого типа валюты, получив объект вида:
*/

// const totalCartPrice = {
//     rubles: number,
//     euros: number,
//     dollars: number,
//     pounds: number,
//     yens: number
// };


var Money = require('./money');
var currenciesEnum = require('./enums').currencies;
var exchange = require('./exchange');
var rates = exchange.getRates();


var totalCartPrice = caclTotalCartPrice(selectedCart);
console.log(totalCartPrice);


//считаем что по-умолчанию цены в корзине в долларах
function caclTotalCartPrice(cart) {
    /** @type {Money} */
    var usdSum = new Money();

    //находим сумму покупок в корзине
    cart.forEach((item) => {
        usdSum.add(item.price);
    });

      //итоговая цена корзины в валютах
    var totalCartPrice = {};

    //для каждой валюты
    Object.keys(currenciesEnum).forEach((currency) =>{
        var currencyMoney = usdSum.clone();
        //вычисляем сумму
        currencyMoney.multiply(rates[currency]);
        //и заполняем
        totalCartPrice[currency] = currencyMoney.getAmount();
    });

    return totalCartPrice;
}

