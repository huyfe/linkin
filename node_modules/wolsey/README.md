# wolsey

    var Wolsey - require("wolsey");
    var cardinal = new Wolsey();

Output numbers as numerals and ordinals

### Version

0.1.0

### Installation

    npm install wolsey

### Instance methods

#### numeral

Convert a number to words

    var converted = cardinal.numeral(num, options);

#### ordinal

Convert a number to its ordinal form in words

    var converted = cardinal.ordinal(num, options);

#### ordinalAsNumber

Convert a number to its numeric ordinal form

    var converted = ordinalAscardinal.numeral(num, options);

#### addLang

Add a language to an existing Wolsey instance

    cardinal.addLanguage(lang, methods);

### Constructor

Create a Wolsey instance

    var cardinal = new Wolsey(lang, methods);

### Static methods

#### LANG

Generic language factory method

    var lang = Wolsey.LANG(options);

#### EN

Base English numbers methods

    var en = WOLSEY.EN(options);

### Languages provided

French

    require("wolsey/lang/fr");
    var cardinal = new Wolsey("fr", Wolsey.FR());

German

    require("wolsey/lang/de");
    var cardinal = new Wolsey("de", Wolsey.DE());

Spanish

    require("wolsey/lang/es");
    var cardinal = new Wolsey("es", Wolsey.ES());

To add a language to an existing Wolsey instance

    cardinal.addLanguage("fr", Wolsey.FR());

### Tests

To run the tests, cd to the wolsey directory

    npm install && npm test

### Unlicense

Cardinal is free and unencumbered software released into 
the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>