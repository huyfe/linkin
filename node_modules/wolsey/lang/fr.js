(function (moduleFactory) {
    if(typeof exports === "object") {
        module.exports = moduleFactory(
            require("../wolsey")
        );
    } else if (typeof define === "function" && define.amd) {
        define(["wolsey"], moduleFactory);
    }
}(function (Wolsey) {
/** 
 * @module  lang/fr
 * @description  French numbers
 *  
 *      require("wolsey/lang/fr");
 *      var cardinal = new Wolsey("fr", Wolsey.FR());
 *
 * Adds {@link module:lang/fr.FR} method to {@link module:wolsey}
 * 
 */

    /**
     * @method FR
     * @static
     * @param  {object} [options]
     * @param {object} [options.powers=powers] Powers to use as units
     * @param {function} [options.lowest=lowest] Method to handle non-power units 
     * @param {object} [options.numerals=numerals] Lookup map of numerals
     * @param {function} [options.ordinal=ordinal] Ordinal method 
     * @param {function} [options.ordinalAsNumber=ordinalAsNumber] Ordinal as number method 
     * @param {string} [options.conjoin=] String to conjoin word parts together 
     * @param {string} [options.separator=] String to separate unit phrases
     * @param {string} [options.oneconjoin=et] Value to use when final part of remnant is one
     * @param {string} [options.hyphenatecompound=true] Whether to hyphenate unit phrases
     * @description  Generic French lang number generator
     *
     * Calls {@link module:wolsey.LANG}
     * @return {object} LANG instance
     */
    function FR (options) {

        options = options || {};
        options.conjoin = options.conjoin || "";
        options.oneconjoin = options.oneconjoin || "et";
        options.space = options.space || "-";
        if (options.hyphenatecompound === undefined) {
            options.hyphenatecompound = true;
        }
        if (options.separator === undefined) {
            options.separator = "";
        }
        if (!options.powers) {
            options.powers = {
                2: { unit: "cent", skiponeunit: true },
                3: { unit: "mille", skiponeunit: true, invariable: true },
                6: "million",
                9: "milliard",
                12: "billion",
                15: "billiard",
                18: "trillion" 
            };
        }
        if (options.pluralizeunitexact === undefined) {
            options.pluralizeunitexact = true;
        }
        if (!options.numerals) {
            options.numerals = {
                "0": "zéro",
                "1": "un",
                "2": "deux",
                "3": "trois",
                "4": "quatre",
                "5": "cinq",
                "6": "six",
                "7": "sept",
                "8": "huit",
                "9": "neuf",
                "10": "dix",
                "11": "onze",
                "12": "douze",
                "13": "treize",
                "14": "quatorze",
                "15": "quinze",
                "16": "seize",
                "17": "dix-sept",
                "18": "dix-huit",
                "19": "dix-neuf",
                "20": "vingt",
                "30": "trente",
                "40": "quarante",
                "50": "cinquante",
                "60": "soixante",
                "80": "quatre-vingts",
                "81": "quatre-vingt-un",
                "80-": "quatre-vingt"
            };
        }
        if (!options.lowest) {
            options.lowest = function lowestFR (num, numerals, numeral) {
                function addDigits (num) {
                    if (!num) {
                        return "";
                    }
                    if (num === 1 || num === 11) {
                        return options.space + options.oneconjoin + options.space + numerals[num];
                    } else {
                        return "-" + numerals[num];
                    }
                }
                var converted;
                if (!num) {
                    converted = "";
                } else if (numerals[num]) {
                    converted = numerals[num];
                } else {
                    if (num === 71) {
                        converted = numerals[60] + addDigits(11);
                    } else if (num > 80) {
                        converted = numerals["80-"] + addDigits(num % 80 % 20);
                    } else if (num > 60) {
                        converted = numerals[60] + addDigits(num % 60 % 20);
                    } else {
                        converted = numerals[Math.floor(num/10) * 10] + addDigits(num % 10);
                    }
                }
                return converted;
            };
        }
        if (!options.ordinal) {
            options.ordinal = function (num, options) {
                options = options || {};
                var numString = this.numeral(num);
                if (num === 1) {
                    return options.gender === "f" ? "première" : "premier";
                }
                numString = numString.replace(/neuf$/, "neuv")
                                     .replace(/s$/, "")
                                     .replace(/troi$/, "trois")
                                     .replace(/e$/, "")
                                     .replace(/^un[ -]/, "");
                numString += "ième";
                return numString;
            };
        }
        if (!options.ordinalAsNumber) {
            options.ordinalAsNumber = function (num, options) {
                options = options || {};
                var ordString = "";
                if (num === 1) {
                    ordString = options.gender === "f" ? "1re" : "1er";
                } else {
                    ordString = "e";
                }
                if (options.plural) {
                    ordString += "s";
                }
                return Wolsey.util.superscriptOridnal(num + ordString, options);
            };
        }
        return Wolsey.LANG(options);
    }

    Wolsey.FR = FR;
    return Wolsey;

}));