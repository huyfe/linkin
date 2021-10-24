var Log = require("log");
var log = new Log(process.env.loglevel || "error");

var Wolsey = require("../wolsey");


describe("Wolsey.numeral", function() {
    function expectNumerals (cardinal, vals, options) {
        vals.forEach(function (val) {
            expect(cardinal.numeral(val[0], options)).toBe(val[1]);
        });
    }

    it("can convert numbers", function () {

        var vals = [
            [0, "zero"],
            [1, "one"],
            [2, "two"],
            [3, "three"],
            [4, "four"],
            [5, "five"],
            [6, "six"],
            [7, "seven"],
            [8, "eight"],
            [9, "nine"],
            [10, "ten"],
            [11, "eleven"],
            [12, "twelve"],
            [13, "thirteen"],
            [14, "fourteen"],
            [15, "fifteen"],
            [16, "sixteen"],
            [17, "seventeen"],
            [18, "eighteen"],
            [19, "nineteen"],
            [20, "twenty"],
            [21, "twenty one"],
            [22, "twenty two"],
            [102, "one hundred and two"],
            [120, "one hundred and twenty"],
            [199, "one hundred and ninety nine"],
            [506, "five hundred and six"],
            [511, "five hundred and eleven"],
            [537, "five hundred and thirty seven"],
            [1001, "one thousand and one"],
            [1002, "one thousand and two"],
            [1203, "one thousand, two hundred and three"],
            [1231, "one thousand, two hundred and thirty one"],
            [3001, "three thousand and one"],
            [3200, "three thousand, two hundred"],
            [47209, "forty seven thousand, two hundred and nine"],
            [102003, "one hundred and two thousand and three"],
            [102304, "one hundred and two thousand, three hundred and four"],
            [506048, "five hundred and six thousand and forty eight"],
            [1000000, "one million"],
            [1000001, "one million and one"],
            [1000002, "one million and two"],
            [1000020, "one million and twenty"],
            [1000200, "one million, two hundred"],
            [1002000, "one million, two thousand"],
            [1002003, "one million, two thousand and three"],
            [1023045, "one million, twenty three thousand and forty five"],
            [1027000, "one million, twenty seven thousand"],
            [1203450, "one million, two hundred and three thousand, four hundred and fifty"],
            [1600000, "one million, six hundred thousand"],
            [10000003, "ten million and three"],
            [17594643, "seventeen million, five hundred and ninety four thousand, six hundred and forty three"],
            [100000300, "one hundred million, three hundred"],
            [102000003, "one hundred and two million and three"],
            [102304567, "one hundred and two million, three hundred and four thousand, five hundred and sixty seven"],
            [360504026, "three hundred and sixty million, five hundred and four thousand and twenty six"],
            [1000000000, "one billion"],
            [1000000001, "one billion and one"],
            [10000027000, "ten billion, twenty seven thousand"],
            [160434000060, "one hundred and sixty billion, four hundred and thirty four million and sixty"],
            [1000000000000, "one trillion"],
            [1000000000001, "one trillion and one"],
            [1000000000000000, "one quadrillion"],
            [1000000000000001, "one quadrillion and one"]
        ];
        expectNumerals(new Wolsey(), vals);
    });

    xit("can handle different langs and default langs", function () {

        var gbvals = [
            [27, "twenty seven"],
            [206, "two hundred and six"]
        ];
        var usvals = [
            [27, "twenty-seven"],
            [206, "two hundred six"]
        ];
        var foovals = [
            [27, "foobar"],
            [206, "foobaztic"]
        ];
        var foo = {
            numeral: function (num) {
                if (num == 27) { return "foobar"; }
                if (num == 206) { return "foobaztic"; }
            },
            ordinal: function (num) {
                return "Not implemented";
            },
            ordinalAsNumber: function (num) {
                return "Not implemented";
            }
        };
        var cardinal = new Wolsey("foo", foo);
        expectNumerals(cardinal, foovals);
        expectNumerals(cardinal, gbvals, {lang: "en-gb"});

        cardinal.setDefault("en-us");
        expectNumerals(cardinal, usvals);

        cardinal.resetDefault();
        expectNumerals(cardinal, foovals);
    });

    xit("can handle strings and invalid cases", function () {

        var vals = [
            ["98", "ninety eight"],
            ["99 red balloons", "99 red balloons"]
        ];
        expectNumerals(new Wolsey(), vals);
    });

    xit("can create custom en langs", function () {

        var vals = [
            [1001, "one thousand and one"],
            [1231, "one thousand, two hundred and thirty-one"],
            [1000001, "one million and one"],
            [1600000, "one million, six hundred thousand"],
            [102, "one hundred and two"],
            [120, "one hundred and twenty"],
            [1002, "one thousand and two"],
            [1203, "one thousand, two hundred and three"],
            [102003, "one hundred and two thousand and three"],
            [102304, "one hundred and two thousand, three hundred and four"],
            [1000002, "one million and two"],
            [1000020, "one million and twenty"],
            [1000200, "one million, two hundred"],
            [1002000, "one million, two thousand"],
            [1002003, "one million, two thousand and three"],
            [1023045, "one million, twenty-three thousand and forty-five"],
            [1203450, "one million, two hundred and three thousand, four hundred and fifty"],
            [100000300, "one hundred million, three hundred"],
            [102000003, "one hundred and two million and three"],
            [102304567, "one hundred and two million, three hundred and four thousand, five hundred and sixty-seven"]

        ];
        var enCustom = Wolsey.EN({separator: "", hyphenatecompound: true});
        var cardinal = new Wolsey("en-custom", enCustom);
        expectNumerals(cardinal, vals);
    });

});


log.info("Tests described");
