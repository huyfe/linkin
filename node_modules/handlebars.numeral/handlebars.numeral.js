(function (moduleFactory) {
    if(typeof exports === "object") {
        module.exports = moduleFactory(require("lodash"), require("numeral"), require("wolsey"));
    } else if (typeof define === "function" && define.amd) {
        define(["lodash", "numeral", "wolsey"], moduleFactory);
    }
}(function (_, numeral, Wolsey) {/**
 * @module handlebars%numeral
 * @description  Helpers providing functionality of [Numeral.js](http://numeraljs.com) and [Wolsey](http://wolsey.solidgoldpig.com)
 *
 *     var Handlebars = require("handlebars");
 *     var NumeralHelper = require("handlebars.numeral");
 *     NumeralHelper.registerHelpers(Handlebars);
 * 
 * @returns {object} NumeralHelper instance
 */

    var cardinal = new Wolsey();

    var NumeralHelpers = function (Handlebars) {

        /* numeral.js language configuration
        * language : english united kingdom (uk)
        * author : Dan Ristic : https://github.com/dristic
        */
        var enLanguage = {
            delimiters: {
                thousands: ",",
                decimal: "."
            },
            abbreviations: {
                thousand: "k",
                million: "m"
            },
            ordinal: function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? "th" :
                (b === 1) ? "st" :
                (b === 2) ? "nd" :
                (b === 3) ? "rd" : "th";
            },
            currency: {
                symbol: "£"
            }
        };
        numeral.language("en", enLanguage);

        var defaults = {};
        var lang = "en";

        defaults.en = {
            zero: "n/a",
            number: "0,000[.]00",
            currency: "$0,000.00",
            byte: "0,000b"
        };

        function numeralHelper () {
            var args = Array.prototype.slice.call(arguments),
                options = args.pop(),
                helperType = args.shift(),
                number = args.shift(),
                format = args.shift(),
                formatParams = args.shift(),
                formatParams1 = args.shift(),
                formatParams2 = args.shift();

            if (options.hash && options.hash.params) {
                options.hash = _.extend({}, options.hash.params, options.hash);
                delete options.hash.params;
            }
            var params = options.hash;
            if (!number) {
                number = params.number;
            }
            number = +number;
            if (isNaN(number)) {
                number = 0;
            }

            var defaultFormat = defaults[lang][helperType];
            if (format === undefined) {
                format = params.format;
                if (format === undefined) {
                    format = defaultFormat;
                }
            }

            var numeralObj = numeral(number);

            return numeralObj.format(format);
        }

        /**
         * @template number
         * @block helper
         * @param {number} 0 Number
         * @param {string} [1] Format
         * @param {string} [format] Alternative way to pass format
         * 
         * @description  Formats a number
         * 
         *     {{number n}}
         *
         * Using an explicit format
         *
         *      {{number n f}}
         *      {{number n format=f}}
         */
        Handlebars.registerHelper("number", function () {
            [].unshift.call(arguments, "number");
            return numeralHelper.apply(this, arguments);
        });

        /**
         * @template currency
         * @block helper
         * @param {number} 0 Number
         * @description  Formats a number as currency
         * 
         *     {{currency n}}
         */
        Handlebars.registerHelper("currency", function () {
            [].unshift.call(arguments, "currency");
            return numeralHelper.apply(this, arguments);
        });

        /**
         * @template byte
         * @block helper
         * @param {number} 0 Number
         * @description  Formats a number as human-readable computer size
         * 
         *     {{byte n}}
         */
        Handlebars.registerHelper("byte", function () {
            [].unshift.call(arguments, "byte");
            return numeralHelper.apply(this, arguments);
        });

        /**
         * @template numeral
         * @block helper
         * @param {number} 0 Number
         * @description  Outputs a number as a word
         * 
         *     {{numeral n}}
         */
        Handlebars.registerHelper("numeral", function () {
            var args = Array.prototype.slice.call(arguments);
            var options;
            if (typeof args[args.length-1] === "object") {
                options = args.pop();
            }

            var number = args.shift();

            if (options.hash && options.hash.params) {
                options.hash = _.extend({}, options.hash.params, options.hash);
                delete options.hash.params;
            }
            var params = options.hash;
            return cardinal.numeral(number, params);
        });

        /**
         * @template ordinal
         * @block helper
         * @param {number} 0 Number
         * @param {boolean} [1] Output as number
         * @param {boolean} [number=false] Output as number
         * 
         * @description  Outputs a number as an ordinal
         *
         *     {{ordinal n}}
         *
         * As a number
         *
         *      {{ordinal n true}}
         *      {{ordinal n number=true}}
         *     
         */
        Handlebars.registerHelper("ordinal", function () {
            var args = Array.prototype.slice.call(arguments);
            var options;
            if (typeof args[args.length-1] === "object") {
                options = args.pop();
            }

            var number = args.shift();
            var asNumber = args.shift();

            if (options.hash && options.hash.params) {
                options.hash = _.extend({}, options.hash.params, options.hash);
                delete options.hash.params;
            }
            var params = options.hash;
            if (!number) {
                number = params.number;
            }
            if (asNumber === undefined) {
                if (params.number !== undefined) {
                    asNumber = params.number;
                } else {
                    asNumber = params.asnumber;
                }
            }
            number = +number;

            var method = asNumber ? "ordinalAsNumber" : "ordinal";
            return cardinal[method](number, params);
        });

    };

    var external = {
        /**
         * @method registerHelpers
         * @static
         * @param {object} hbars Handlebars instance
         * @description Register NumeralHelper helpers with Handlebars
         *
         * - {@link template:moment}
         * - {@link template:duration}
         */
        registerHelpers: function (hbars) {
            NumeralHelpers(hbars);
        }
    };

    return external;

}));