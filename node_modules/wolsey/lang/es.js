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
 * @module  lang/es
 * @description  Spanish numbers
 *  
 *      require("wolsey/lang/es");
 *      var cardinal = new Wolsey("es", Wolsey.ES());
 *
 * Adds {@link module:lang/es.ES} method to {@link module:wolsey}
 * 
 */

    /**
     * @method ES
     * @static
     * @param  {object} [options]
     * @param {object} [options.powers=powers] Powers to use as units
     * @param {boolean} [options.milliardstyle=false] Whether to use milliard-style units
     * @param {function} [options.lowest=lowest] Method to handle non-power units 
     * @param {object} [options.numerals=numerals] Lookup map of numerals
     * @param {object} [options.ordinals=ordinals] Lookup map of ordinals
     * @param {function} [options.ordinal=ordinal] Ordinal method 
     * @param {function} [options.ordinalAsNumber=ordinalAsNumber] Ordinal as number method
     * @param {string} [options.unitone=un] Value to use when unit quotient is one  
     * @param {string} [options.space=] Character to use for generic spaces between number words  
     * @param {string} [options.conjoin=] String to conjoin word parts together 
     * @param {string} [options.separator=] String to separate unit phrases
     * @description  Generic Spanish lang number generator
     *
     * Calls {@link module:wolsey.LANG}
     * @return {object} LANG instance
     */
    function ES (options) {

        options = options || {};
        options.pluralize = true;
        options.conjoin = options.conjoin || "";
        options.unitone = options.unitone || "un";
        options.space = options.space || " ";
        if (options.hyphenatecompound === undefined) {
            // /options.hyphenatecompound = true;
        }
        if (options.separator === undefined) {
            options.separator = "";
        }
        if (!options.powers) {
            options.powers = {
                2: { power: 2, unit: "ciento", skiponeunit: true },
                3: { power: 3, unit: "mil", ordinal: "milésimo", skiponeunit: true, invariable: true },
                6: { power: 6, unit: "millón", ordinal: "millonésimo", plural: "millones" },
                12: { power: 12, unit: "billón", ordinal: "billonésimo", plural: "billones" },
                18: { power: 18, unit: "trillón", ordinal: "trillonésimo", plural: "trillones" }
            };
            if (options.milliardstyle) {
                options.powers["9"] = { unit: "millardo", plural: "millardos" };
                options.powers["15"] = { unit: "billardo", plural: "billardos" };
            }
        }
        if (!options.numerals) {
            options.numerals = {
                "0": "cero",
                "1": "uno",
                "2": "dos",
                "3": "tres",
                "4": "cuatro",
                "5": "cinco",
                "6": "seis",
                "7": "siete",
                "8": "ocho",
                "9": "nueve",
                "10": "diez",
                "11": "once",
                "12": "doce",
                "13": "trece",
                "14": "catorce",
                "15": "quince",
                "16": "dieciséis",
                "17": "diecisiete",
                "18": "dieciocho",
                "19": "diecinueve",
                "20": "veinte",
                "21": "veintiuno",
                "22": "veintidós",
                "23": "veintitrés",
                "24": "veinticuatro",
                "25": "veinticinco",
                "26": "veintiséis",
                "27": "veintisiete",
                "28": "veintiocho",
                "29": "veintinueve",
                "30": "treinta",
                "40": "cuarenta",
                "50": "cincuenta",
                "60": "sesenta",
                "70": "setenta",
                "80": "ochenta",
                "90": "noventa",
                "100": "ciento",
                "100=": "cien",
                "200": "doscientos",
                "300": "trescientos",
                "400": "cuatrocientos",
                "500": "quinientos",
                "600": "seiscientos",
                "700": "setecientos",
                "800": "ochocientos",
                "900": "novecientos"
            };
        }
        if (!options.ordinals) {
            options.ordinals = {
                "0": "cero",
                "1": "primero",
                "2": "segundo",
                "3": "tercero",
                "4": "cuarto",
                "5": "quinto",
                "6": "sexto",
                "7": "séptimo",
                "8": "octavo",
                "9": "noveno",
                "10": "décimo",
                "11": "undécimo",
                "12": "duodécimo",
                "13": "decimotercero",
                "14": "decimocuarto",
                "15": "decimoquinto",
                "16": "decimosexto",
                "17": "decimoséptimo",
                "18": "decimoctavo",
                "19": "decimonoveno",
                "20": "vigésimo",
                "30": "trigésimo",
                "40": "cuadragésimo",
                "50": "quincuagésimo",
                "60": "sexagésimo",
                "70": "septuagésimo",
                "80": "octogésimo",
                "90": "nonagésimo",
                "100": "centésimo",
                "200": "ducentésimo",
                "300": "tricentésimo",
                "400": "cuadringentésimo",
                "500": "quingentésimo",
                "600": "sexcentésimo",
                "700": "septingentésimo",
                "800": "octingentésimo",
                "900": "noningentésimo",
                "1000": "milésimo",
                "1000000": "millonésimo"
            };
        }
        if (!options.lowest) {
            options.lowest = function lowestES (num, numerals, numeral) {
                var converted;
                if (!num) {
                    converted = "";
                } else if (numerals[num]) {
                    converted = numerals[num];
                } else {
                    converted = numerals[Math.floor(num/10) * 10] + " y " + numerals[num % 10];
                }
                return converted;
            };
        }
        if (!options.ordinal) {
            options.ordinal = function (num, ooptions) {
                ooptions = ooptions || {};
                ooptions.lookup = options.ordinals;
                ooptions.unitkind = "ordinal";
                ooptions.invariable = true;
                var ordString = this.numeral(num, ooptions);
                ordString = ordString.replace(/ y /g, " ");
                ordString = ordString.replace(/^un /, "");
                if (ooptions.plural) {
                    ordString = ordString.replace(/(er|und|art|int|xt|im|av|en)o/g, "$1os");
                }
                if (ooptions.gender === "f") {
                    ordString = ordString.replace(/(er|und|art|int|xt|im|av|en)o/g, "$1a");
                }
                // primer, tercer
                ordString = ordString.replace(/ero\b/g, "er");
                return ordString;
            };
        }
        if (!options.ordinalAsNumber) {
            options.ordinalAsNumber = function (num, options) {
                options = options || {};
                var superscript = "a"; //"ª";
                if (options.gender !== "f") {
                    superscript = "o"; //"º";
                    var rem = num % 10;
                    if (rem === 1 || rem === 3) {
                        superscript = "er";
                    }
                }
                return Wolsey.util.superscriptOridnal(num + "." + superscript, options);
            };
        }
        return Wolsey.LANG(options);
    }

    Wolsey.ES = ES;
    return Wolsey;

}));