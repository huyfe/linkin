var Log = require("log");
var log = new Log(process.env.loglevel || "error");

var Wolsey = require("../wolsey");


describe("Wolsey.ordinal", function() {
    function expectOrdinals (cardinal, vals, options) {
        vals.forEach(function (val) {
            expect(cardinal.ordinal(val[0], options)).toBe(val[1]);
        });
    }

    it("can convert numbers", function () {

        var vals = [
            [0, "zeroth"],
            [1, "first"],
            [2, "second"],
            [3, "third"],
            [4, "fourth"],
            [5, "fifth"],
            [6, "sixth"],
            [7, "seventh"],
            [8, "eighth"],
            [9, "ninth"],
            [10, "tenth"],
            [11, "eleventh"],
            [12, "twelfth"],
            [13, "thirteenth"],
            [14, "fourteenth"],
            [15, "fifteenth"],
            [16, "sixteenth"],
            [17, "seventeenth"],
            [18, "eighteenth"],
            [19, "nineteenth"],
            [20, "twentieth"],
            [21, "twenty first"],
            [22, "twenty second"],
            [199, "one hundred and ninety ninth"],
            [506, "five hundred and sixth"],
            [1000, "one thousandth"],
            [1001, "one thousand and first"],
            [1000000, "one millionth"]
        ];
        expectOrdinals(new Wolsey(), vals);
    });

});


log.info("Tests described");
