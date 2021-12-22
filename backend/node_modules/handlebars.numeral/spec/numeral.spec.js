var Log = require("log");
var log = new Log(process.env.loglevel || "error");

var Handlebars = require("handlebars");
require("../handlebars.numeral").registerHelpers(Handlebars);

function template(tmpl, data) {
    var urtemplate = Handlebars.compile(tmpl);
    var output = urtemplate(data || {});
    log.info(output);
    return output;
}


describe("Numeral helper - number", function() {

    it("should handle numbers", function () {
        expect(template('{{number 3000}}')).toBe("3,000");
        expect(template('{{number "3000.2"}}')).toBe("3,000.20");
        expect(template('{{number "3000.234"}}')).toBe("3,000.23");
        expect(template('{{number "3000.236"}}')).toBe("3,000.24");
        expect(template('{{number 30000000}}')).toBe("30,000,000");
    });

    it("should handle formats", function () {
        expect(template('{{number 3000 "0"}}')).toBe("3000");
        expect(template('{{number 3000 format="0"}}')).toBe("3000");
        expect(template('{{number "3000.2" "0"}}')).toBe("3000");
        expect(template('{{number "3000.2" "0.0"}}')).toBe("3000.2");
        expect(template('{{number "3000" "0,0[.]0"}}')).toBe("3,000");
        expect(template('{{number "3000.24" "0,0[.]0"}}')).toBe("3,000.2");
        expect(template('{{number "3000.26" "0,0[.]0"}}')).toBe("3,000.3");
        expect(template('{{number "3000.000" "0,0[.]0"}}')).toBe("3,000");
        expect(template('{{number 30000000 "0a"}}')).toBe("30m");
    });

});

describe("Numeral helper - currency", function() {

    it("should handle currency amounts", function () {
        expect(template('{{currency 3000}}')).toBe("£3,000.00");
        expect(template('{{currency "3000.2"}}')).toBe("£3,000.20");
        expect(template('{{currency "3000.234"}}')).toBe("£3,000.23");
        expect(template('{{currency "3000.236"}}')).toBe("£3,000.24");
        expect(template('{{currency 30000000}}')).toBe("£30,000,000.00");
    });

});

describe("Numeral helper - byte", function() {

    it("should handle computer size amounts", function () {
        expect(template('{{byte 1}}')).toBe("1B");
        expect(template('{{byte 8}}')).toBe("8B");
        expect(template('{{byte 1024}}')).toBe("1KB");
        expect(template('{{byte 40000}}')).toBe("39KB");
        expect(template('{{byte 40500}}')).toBe("40KB");
        expect(template('{{byte 2000000}}')).toBe("2MB");
        expect(template('{{byte 2000000000}}')).toBe("2GB");
    });

});

describe("Numeral helper - numeral", function() {

    it("should handle numerals as words", function () {
        expect(template('{{numeral 2001}}')).toBe("two thousand and one");
    });

});

describe("Numeral helper - ordinal", function() {

    it("should handle ordinals", function () {
        expect(template('{{ordinal 2001}}')).toBe("two thousand and first");
        expect(template('{{ordinal 2001 true}}')).toBe("2001st");
        expect(template('{{ordinal 2001 number=true}}')).toBe("2001st");
    });

});

log.info("Tests described");
