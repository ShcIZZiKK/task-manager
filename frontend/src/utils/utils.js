import moment from 'moment';
import 'moment/locale/ru';

class Utils {
    /**
     * Преобразует дату в формат
     * @param {string} date - дата
     * @param {string} format - формат, например DD.MM.YYYY
     * @returns {string} - дата в указаном формате
     */
    static formatDate(date, format = 'DD.MM.YYYY') {
        return moment(date).format(format);
    }

    /**
     * Преобразует цену в формат
     * @param {number} price - цена
     * @param {string} currency - код валюты
     * @returns {string} - отформатированная цена, например 7 000 000 Рублей.
     */
    static formatPrice(price, currency = '₽') {
        return `${price.toLocaleString()} ${currency}`;
    }

    /**
     * Преобразует минуты в часы плюс минуты
     * @param {number} totalMinutes - кол-во минут
     * @returns {string} - часы:минуты
     */
    static minutesToHours(totalMinutes = 0) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const visualHours = hours < 10 ? `0${hours}` : hours;
        const visualMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${visualHours}:${visualMinutes}`;
    }

    /**
     * Метод проверяет пустой объект или нет
     * @param {Object} object - объект проверяемый на пустоту
     * @return {boolean} - true если пустой и false если полный
     */
    static isEmptyObject(object) {
        const empty = 0;

        return Object.keys(object).length === empty;
    }
}

export default Utils;
