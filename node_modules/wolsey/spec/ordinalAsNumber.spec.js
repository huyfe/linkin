var Log = require("log");
var log = new Log(process.env.loglevel || "error");

var Wolsey = require("../wolsey");


describe("Wolsey.ordinalAsNumber", function() {
    function expectOrdinalAsNumbers (cardinal, vals, options) {
        vals.forEach(function (val) {
            expect(cardinal.ordinalAsNumber(val[0], options)).toBe(val[1]);
        });
    }

    it("can convert numbers", function () {

        var vals = [
            [0, "0th"],
            [1, "1st"],
            [2, "2nd"],
            [3, "3rd"],
            [4, "4th"],
            [5, "5th"],
            [6, "6th"],
            [7, "7th"],
            [8, "8th"],
            [9, "9th"],
            [10, "10th"],
            [11, "11th"],
            [12, "12th"],
            [13, "13th"],
            [14, "14th"],
            [15, "15th"],
            [16, "16th"],
            [17, "17th"],
            [18, "18th"],
            [19, "19th"],
            [20, "20th"],
            [21, "21st"],
            [22, "22nd"],
            [23, "23rd"],
            [24, "24th"],
            [30, "30th"],
            [31, "31st"],
            [32, "32nd"],
            [33, "33rd"],
            [34, "34th"],
            [100, "100th"],
            [101, "101st"],
            [102, "102nd"],
            [103, "103rd"],
            [111, "111th"],
            [112, "112th"],
            [113, "113th"],
            [199, "199th"],
            [506, "506th"]
        ];
        expectOrdinalAsNumbers(new Wolsey(), vals);
    });

});


log.info("Tests described");
