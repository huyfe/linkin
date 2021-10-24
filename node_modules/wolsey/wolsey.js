(function (moduleFactory) {
    if(typeof exports === "object") {
        module.exports = moduleFactory();
    } else if (typeof define === "function" && define.amd) {
        define([], moduleFactory);
    }
}(function () {
/**
 * @module wolsey
 * @description  Generates numerals as words and ordinals
 *
 *     var Wolsey = require("wolsey");
 *     var cardinal = new Wolsey();
 * 
 * @returns {object} Wolsey {@link module:wolsey.Constructor}
 */

    /**
     * @method  lowestEN
     * @inner
     * @param  {number} num      Number to be converted
     * @param  {object} numerals Object representing digits and irregular instances
     * @param  {object} numeral  Wolsey instance’s numeral object
     * @return {string} converted Numeral string
     */
    function lowestEN (num, numerals, numeral) {
        var converted;
        if (!num) {
            converted = "";
        } else if (numerals[num]) {
            converted = numerals[num];
        } else {
            converted = numerals[Math.floor(num/10) * 10] + numeral.hyphenatecompound + numerals[num % 10];
        }
        return converted;
    }

    /**
     * @method EN
     * @static
     * @param  {object} [options]
     * @param {object} [powers=powers] Powers to use as units
     * @param {boolean} [longscale=false] Whether to use longscale units
     * @param {function} [lowest=lowestEN] Method to handle non-power units 
     * @param {object} [numerals=numerals] Lookup map of numerals
     * @param {function} [ordinal=ordinal] Ordinal method 
     * @param {function} [ordinalAsNumber=ordinalAsNumber] Ordinal as number method 
     * @description  Generic English lang number generator
     *
     * Calls {@link module:wolsey.LANG}
     * @return {object} LANG instance
     */
    function EN (options) {
        options = options || {};
        options.lowest = options.lowest || lowestEN;
        if (!options.powers) {
            options.powers = {
                2: "hundred",
                3: "thousand",
                6: "million",
                9: "billion",
                12: "trillion",
                15: "quadrillion",
                18: "quintillion"
            };
            if (options.longscale) {
                options.powers["9"] = "milliard" ;
                options.powers["15"] = "billiard" ;
            }
        }
        if (!options.numerals) {
            options.numerals = {
                "0": "zero",
                "1": "one",
                "2": "two",
                "3": "three",
                "4": "four",
                "5": "five",
                "6": "six",
                "7": "seven",
                "8": "eight",
                "9": "nine",
                "10": "ten",
                "11": "eleven",
                "12": "twelve",
                "13": "thirteen",
                "14": "fourteen",
                "15": "fifteen",
                "16": "sixteen",
                "17": "seventeen",
                "18": "eighteen",
                "19": "nineteen",
                "20": "twenty",
                "30": "thirty",
                "40": "forty",
                "50": "fifty",
                "60": "sixty",
                "70": "seventy",
                "80": "eighty",
                "90": "ninety"
            };
        }
        if (!options.ordinal) {
            options.ordinal = function (num, options) {
                var numString = this.numeral(num);
                var map = {
                    one: "first",
                    two: "second",
                    three: "third",
                    five: "fifth",
                    eight: "eighth",
                    nine: "ninth",
                    twelve: "twelfth"
                };
                var words = numString.split(" ");
                var last = words.length - 1,
                    lastword = words[last];
                var lastmap = map[lastword];
                if (lastmap) {
                    words[last] = lastmap;
                } else {
                    var lastchar = lastword.slice(-1);
                    if (lastchar === "y") {
                        lastword = lastword.replace("y", "ie");
                    }
                    words[last] = lastword + "th";
                }
                return words.join(" ");
            };
        }
        if (!options.ordinalAsNumber) {
            options.ordinalAsNumber = function (num, options) {
                var map = {
                    1: "st",
                    2: "nd",
                    3: "rd",
                    all: "th"
                };
                var remainder = num % 100;
                if (remainder > 20) {
                    remainder = remainder % 10;
                }
                return num + (map[remainder] ? map[remainder] : map.all);
            };
        }
        return LANG(options);
    }

    /**
     * @method  LANG
     * @static
     * @param  {object} [options]
     * @param {object} [options.numerals] Digits and irregualr numbers to use
     * @param {array|object} [options.powers] Powers of 10 considered to be increments by language
     * @param  {function} [options.lowest] Method to handle non-powers
     * @param  {function} [options.ordinal] Method to handle ordinals
     * @param  {function} [options.ordinalAsNumber] Method to handle ordinals as numbers
     * @param  {string} [options.space=" "] Character to use for generic spaces between number words
     * @param {string} [options.unitone] Value to use when unit quotient is one
     * @param {boolean} [options.pluralizeunitexact=false] Pluralize unit only if no remnant
     * @param {boolean} [options.hyphenatecompound=false] Whether to hyphenate unit phrases
     * @param {string} [options.oneconjoin] Value to use when final part of remnant is one
     * @description  Generic lang number generator
     * @return {object} methods instance
     */
    function LANG (options) {
        options = options || {};

        var numerals = options.numerals;
        var powers = options.powers;
        var lowestMethod = options.lowest;
        var ordinal = options.ordinal;
        var ordinalAsNumber = options.ordinalAsNumber;
        var space = options.space || " ";
        // Should throw an exception if we don't have these

        if (!Array.isArray(options.powers)) {
            var realpowers = [];
            for (var power in powers) {
                var realprop = {};
                var powerprop = options.powers[power];
                if (typeof powerprop === "string") {
                    realprop.unit = powerprop;
                } else {
                    for (var prop in powerprop) {
                        realprop[prop] = powerprop[prop];
                    }
                }
                realprop.power = power;
                realpowers.push(realprop);
            }
            if (!powers["0"]) {
                realpowers.push({ power: 0 });
            }
            powers = realpowers.sort(function (a, b) {
                return a.power*1 > b.power*1;
            });
        }

        // conjoin should not be a default
        /**
         * @member defaults
         * @inner
         * @private
         * @type {object}
         * @property {string} conjoin=and String to conjoin word parts together
         * @property {number} conjoinfloor=100 Amount above which conjoining should not occur
         * @property {string} separator=, String to use as separator between unit phrases
         */
        var defaults = {
            conjoin: "and",
            conjoinfloor: 100,
            separator: ","
        };

        var numeral = {};
        numeral.conjoin = options.conjoin !== undefined ? options.conjoin : defaults.conjoin;
        numeral.separator = options.separator !== undefined ? options.separator : defaults.separator;
        // pass this as a string rather than boolean
        numeral.hyphenatecompound = !options.hyphenatecompound ? " " : "-";

        var conjoinmatch;
        if (numeral.conjoin) {
            conjoinmatch = new RegExp("^" + numeral.conjoin + " ") ;
        }
        /**
         * @method  convertMethod
         * @inner
         * @private
         * @param {number} num Number to be converted
         * @param  {object} poptions Describes options for the power level
         * @param  {function} poptions.nextmethod Method to call for remnant
         * @param  {function} poptions.highestmethod Method to call for quotient
         * @param  {number} poptions.floor The power’s value
         * @param  {string} [poptions.unitspace=" "] Character to use between quotient, unit and remnant
         * @param  {boolean} [poptions.skiponeunit=false] Whether to suppress number when the unit’s quotient is one
         * @param  {string} [poptions.plural] Plural form of power
         * @param  {boolean} [poptions.pluralizeunitexact] Pluralize unit only if no remnant
         * @param  {boolean} [poptions.invariable] Unit should not be pluralized
         * @param  {object} poptions.{{moptions.unitkind}} Unit (or alternative kind) conversion is handling
         * @param  {object} [moptions] Specific options for the conversion
         * @param  {object} [moptions.lookup=numerals] Object to perform numeric lookups
         * @param  {string} [moptions.unitkind=unit] Allows a different unit kind to be specified, eg. ordinal, which allows the numeral method to be reused as is
         * @description  Generates a string by determing the quotient for the current power unit and joining it with its remnant along with spaces, conjoins and separators as required.
         *
         * The remant is generated by calling the next method, passing it the remainder and the same moptions.
         * 
         * NB. options are the options passed to the lang generating method
         * @return {function}  Method that converts the number at that power level and then moves to the next power level
         */
        function convertMethod (num, poptions, moptions) {
            moptions = moptions || {};
            var numlookup = moptions.lookup || numerals;
            var numunitkind = moptions.unitkind || "unit";
            var nextmethod = poptions.nextmethod;
            var unitmethod = numeral.highestmethod;
            var space = options.space;
            if (space === undefined) {
                space = " ";
            }
            var unitspace = poptions.unitspace || "";
            var unit = poptions[numunitkind];
            var skiponeunit = poptions.skiponeunit;
            var floor = poptions.floor;
            var conjoinfloor = defaults.conjoinfloor;
            var converted = "";
            if (num >= floor) {
                var remainder = num % floor;
                var remnant = nextmethod(remainder, moptions);
                if (numeral.conjoin && remainder && remainder < conjoinfloor) {
                    remnant = numeral.conjoin + space + remnant;
                }
                var separator = numeral.separator;

                if (!remnant || (conjoinmatch && remnant.match(conjoinmatch))) {
                    separator = "";
                }
                separator += space;
                var unitunit = unit;
                var unitamount = Math.floor(num/floor);
                var unitvalue = unitmethod(unitamount);
                if (skiponeunit && unitamount === 1) {
                    unitvalue = "";
                } else {
                    if (unitamount === 1 && options.unitone) {
                        unitvalue = options.unitone;
                    }
                    unitvalue += space;
                    if (unitamount > 1 && !poptions.invariable && !moptions.invariable) {
                        if (options.pluralize || (!remainder && (poptions.pluralizeunitexact || options.pluralizeunitexact))) {
                            unitunit = poptions.plural || unitunit + "s";
                        }
                    } 
                }
                var unitout = unitvalue + unitspace + unitunit;
                var numerallookup = unitamount * floor;
                if (numlookup[numerallookup+"="] && remainder === 0) {
                    unitout = numlookup[numerallookup+"="];
                } else if (numlookup[numerallookup]) {
                    unitout = numlookup[numerallookup];
                }
                converted = unitout + unitspace + separator + remnant;
            }
            else if (num) {
                converted = nextmethod(num, moptions);
            }
            return converted;
        }

        /**
         * @method  convertLowest
         * @inner
         * @private
         * @param {number} num Number to be converted
         * @param  {object} [options] Specific conversion options
         * @description  Method for converting any non-powers numbers
         * @return {string}  Converted number as string
         */
        var convertLowest = function (num, options) {
            options = options || {};
            var numlookup = options.lookup || numerals; 
            return lowestMethod(num, numlookup, numeral);
        };

        var doubleSpaceCheck = new RegExp(space + "{2,}", "g");
        var endSpaceCheck = new RegExp(space + "$");
        /**
         * @method  convert
         * @inner
         * @private
         * @param {number} num Number to be converted
         * @param  {object} [options] Specific conversion options
         * @description  Tries to retrieve an explicit lookup value or else invokes the highest power method
         * @return {string}  Converted number as string
         */
        function convert (num, options) {
            options = options || {};
            var numlookup = options.lookup || numerals;
            if (isNaN(num)) {
                return numeral.notanumber || num;
            }
            num = num * 1;
            var converted = numlookup[num] || numeral.highestmethod(num, options);
            // make sure there are no double or trailing spaces
            converted = converted.replace(doubleSpaceCheck, space).replace(endSpaceCheck, "");
            return converted;
        }

        var powerlength = powers.length;
        var powerpos = {};
        /**
         * @method  createPowerMethod
         * @inner
         * @private
         * @param  {object} poptions Describes options for the power level
         * @return {function}  Method that converts the number at that power level and then moves to the next power level
         */
        function createPowerMethod (poptions) {
            return function (num, options) {
                return convertMethod(num, poptions, options);
            };
        }
        powers.forEach(function (pow, index) {
            pow.floor = Math.pow(10, pow.power);
            if (!pow.conjoinfloor) {
                if (pow.conjoinpower) {
                    pow.conjoinfloor = Math.pow(10, pow.conjoinpower);
                } else {
                    pow.conjoinfloor = pow.floor/10;
                }
            }
            pow.nextmethod = numeral.highestmethod;
            if (!pow.power) {
                pow.method = pow.method || convertLowest;
            }
            numeral.highestmethod = pow.method || createPowerMethod(pow);
        });

        var methods = {
            numeral: function (num, options) {
                return convert(num, options);
            },
            ordinal: ordinal,
            ordinalAsNumber: ordinalAsNumber
        };
        return methods;
    }
    var langs = {
        "en-gb": new EN(),
        "en-us": new EN({conjoin: false, hyphenatecompound: true})
    };

    /**
     * @method  Constructor
     * @static
     * @param {string} [lang=en-gb] Default lang
     * @param {object} [methods=en-gb methods] Lang methods
     * @description Create an instance of Wolsey
     *
     *      var foo = {
     *          numeral: function (num, options) { … },
     *          ordinal: function (num, options) { … },
     *          ordinalAsNumber: function (num, options) { … }
     *      };
     *      var cardinal = new Wolsey("foo", foo);
     *
     * Or using one of the additional supplied languages
     * 
     *      require("wolsey/lang/fr");
     *      var cardinal = new Wolsey("fr", Wolsey.FR());
     */
    function Cardinal (lang, methods) {
        var external = {};
        var internal = {
            cache: {}
        };

        function CardinalAddLang (lang, methods) {
            langs[lang] = methods;
            CardinalSetCache(lang);
        }

        function CardinalSetDefault (lang) {
            if (langs[lang]) {
                internal.defaultlang = lang;
            }
            if (!internal.initialdefaultlang) {
                internal.initialdefaultlang = lang;
            }
        }

        function CardinalSetCache (lang) {
            internal.cache[lang] = {
                numeral: {},
                ordinal: {},
                ordinalAsNumber: {}
            };
        }

        for (var clang in langs) {
            CardinalSetCache(clang);
        }
        if (lang && methods) {
            CardinalAddLang(lang, methods);
        }
        CardinalSetDefault(lang || "en-gb");

        /**
         * @method  genericMethod
         * @inner
         * @param  {string} method Method to be invoked
         * @param  {number} num Number to be converted
         * @param  {object} options Options for the method
         * @return {string}  converted number
         */
        function genericMethod (method, num, options) {
            options = options || {};
            var lang = options.lang || internal.defaultlang;
            var cachekey = num + JSON.stringify(options);
            if (internal.cache[lang][method][cachekey]) {
                return internal.cache[lang][method][cachekey];
            }
            var computed = langs[lang][method](num, options);
            internal.cache[lang][method][cachekey] = computed;
            return computed;
        }
        /**
         * @method  numeral
         * @instance
         * @param  {number} num
         * @param  {object} options
         * @description  Calls {@link module:wolsey~genericMethod}
         * @return {string} numeral
         */
        external.numeral = function CardinalNumeral (num, options) {
            return genericMethod("numeral", num, options);
        };

        /**
         * @method  ordinal
         * @instance
         * @param  {number} num
         * @param  {object} options
         * @description  Calls {@link module:wolsey~genericMethod}
         * @return {string} ordinal
         */
        external.ordinal = function CardinalOrdinal (num, options) {
            return genericMethod("ordinal", num, options);
        };

        /**
         * @method  ordinalAsNumber
         * @instance
         * @param  {number} num
         * @param  {object} options
         * @description  Calls {@link module:wolsey~genericMethod}
         * @return {string} ordinalAsNUmber
         */
        external.ordinalAsNumber = function CardinalOrdinalAsNumber (num, options) {
            return genericMethod("ordinalAsNumber", num, options);
        };

        /**
         * @method  addLang
         * @instance
         * @param  {string} lang
         * @param  {object} methods
         * @description  Adds language to Wolsey instance
         */
        external.addLang = CardinalAddLang;

        /**
         * @method  setDefault
         * @instance
         * @param  {string} lang
         * @description  Sets language as Wolsey instance’s default
         */
        external.setDefault = CardinalSetDefault;

        /**
         * @method  resetDefault
         * @instance
         * @description  Resets default language to Wolsey instance’s original default
         */
        external.resetDefault = function CardinalResetDefault () {
            internal.defaultlang = internal.initialdefaultlang;
        };

        return external;
    }

    Cardinal.util = {
        superscriptOridnal: function CardinalUtilSuperscriptOridnal (str, options) {
            options = options || {};
            if (options.html) {
                str = str.replace(/([^0-9\.]+)$/, "<sup>$1</sup>");
            }
            return str;
        }
    };
    // Expose EN and LANG to world
    Cardinal.EN = EN;
    Cardinal.LANG = LANG;
    return Cardinal;
}));
