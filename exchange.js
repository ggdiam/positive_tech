/**
 * Created by Alexander on 27.03.2017.
 */
module.exports = {
    //обменные курсы валют к доллару
    /**
     * @returns {{rubles: number, euros: number, dollars: number, pounds: number, yens: number}}
     */
    getRates: function getDollarsToCurrenciesExchangeRates() {
        return {
            rubles: 56.86,
            euros: 0.92,
            dollars: 1,
            pounds: 0.8,
            yens: 110.18
        }
    }
};

