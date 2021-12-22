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
 * @module  lang/de
 * @description  German numbers
 *  
 *      require("wolsey/lang/de");
 *      var cardinal = new Wolsey("de", Wolsey.DE());
 *
 * Adds {@link module:lang/de.DE} method to {@link module:wolsey}
 * 
 */

    /**
     * @method DE
     * @static
     * @param  {object} [options]
     * @param {object} [options.powers=powers] Powers to use as units
     * @param {function} [options.lowest=lowest] Method to handle non-power units 
     * @param {object} [options.numerals=numerals] Lookup map of numerals
     * @param {function} [options.ordinal=ordinal] Ordinal method 
     * @param {function} [options.ordinalAsNumber=ordinalAsNumber] Ordinal as number method
     * @param {string} [options.unitone=eine] Value to use when unit quotient is one  
     * @param {string} [options.space=] Character to use for generic spaces between number words  
     * @param {string} [options.conjoin=] String to conjoin word parts together 
     * @param {string} [options.separator=] String to separate unit phrases
     * @param {boolean} [options.pluralizeunitexact=true] Whether to pluralize unit only if no remnant  
     * @description  Generic German lang number generator
     *
     * Calls {@link module:wolsey.LANG}
     * @return {object} LANG instance
     */
    function DE (options) {

        options = options || {};
        options.pluralize = true;
        options.conjoin = options.conjoin || "";
        options.unitone = options.unitone || "eine";
        //options.oneconjoin = options.oneconjoin || "et";
        options.space = options.space || "";
        if (options.hyphenatecompound === undefined) {
            //options.hyphenatecompound = true;
        }
        if (options.separator === undefined) {
            options.separator = "";
        }
        if (!options.powers) {
            options.powers = {
                2: { unit: "hundert", skiponeunit: true, invariable: true },
                3: { unit: "tausend", skiponeunit: true, invariable: true },
                6: { unit: "Million", plural: "Millionen", unitspace: " " },
                9: { unit: "Milliarde", plural: "Milliarden", unitspace: " " },
                12: { unit: "Billion", plural: "Billionen", unitspace: " " },
                15: { unit: "Billiarde", plural: "Billiarden", unitspace: " " },
                18: { unit: "Trillion", plural: "Trillionen", unitspace: " " }
            };
        }
        if (options.pluralizeunitexact === undefined) {
            options.pluralizeunitexact = true;
        }
        if (!options.numerals) {
            options.numerals = {
                "0": "null",
                "1": "ein",
                "1f": "eine",
                "1s": "undeins",
                "2": "zwei",
                "3": "drei",
                "4": "vier",
                "5": "fünf",
                "6": "sechs",
                "7": "sieben",
                "8": "acht",
                "9": "neun",
                "10": "zehn",
                "11": "elf",
                "12": "zwölf",
                "13": "dreizehn",
                "14": "vierzehn",
                "15": "fünfzehn",
                "16": "sechzehn",
                "17": "siebzehn",
                "18": "achtzehn",
                "19": "neunzehn",
                "20": "zwanzig",
                "30": "dreißig",
                "40": "vierzig",
                "50": "fünfzig",
                "60": "sechzig",
                "70": "siebzig",
                "80": "achtzig",
                "90": "neunzig",
                "100": "hundert",
                "1000": "tausend"
            };
        }
        if (!options.lowest) {
            options.lowest = function lowestDE (num, numerals, numeral) {
                var converted;
                if (!num) {
                    converted = "";
                } else if (num === 1) {
                    converted = numerals["1s"];
                } else if (numerals[num]) {
                    converted = numerals[num];
                } else {
                    var prefix = numerals[num % 10];
                    prefix += "und";
                    converted = prefix + numerals[Math.floor(num/10) * 10];
                }
                return converted;
            };
        }
        if (!options.ordinal) {
            options.ordinal = function (num, options) {
                options = options || {};
                var ordString = this.numeral(num, options).trim();
                ordString = ordString.replace(/zundeins$/, "erste")
                                     .replace(/ein[es]*$/, "erste")
                                     .replace(/zwei$/, "zweite")
                                     .replace(/drei$/, "dritte")
                                     .replace(/vier$/, "vierte")
                                     .replace(/fünf$/, "fünfte")
                                     .replace(/sechs$/, "sechste")
                                     .replace(/sieben$/, "siebte")
                                     .replace(/acht$/, "achte")
                                     .replace(/neun$/, "neunte")
                                     .replace(/zehn$/, "zehnte")
                                     .replace(/elf$/, "elfte")
                                     .replace(/zwölf$/, "zwölfte")
                                     .replace(/en$/, "");
                if (!ordString.match(/te$/)) {
                    ordString += "ste";
                }
                return ordString;
            };
        }
        if (!options.ordinalAsNumber) {
            options.ordinalAsNumber = function (num, options) {
                return num + ".";
            };
        }
        return Wolsey.LANG(options);
    }

    Wolsey.DE = DE;
    return Wolsey;

}));