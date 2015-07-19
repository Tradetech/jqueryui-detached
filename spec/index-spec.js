/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("index.js", function () {

    it("- test", function (done) {
        testUtil.onPage(function(window) {
            var jqueryUI = require("../js/index");
            
            jqueryUI.clear();
            
            var $1 = jqueryUI.getJQueryUI();
            
            expect($1.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            var divOnPage = $1('#divOnPage');
            expect(divOnPage.text()).toBe('jQueryUI is everywhere');
            expect(divOnPage.dialog).toBeDefined();

            jqueryUI.clear();
            
            var $2 = jqueryUI.getJQueryUI();
            expect($1).not.toBe($2);
            
            done();
        });
    });
});
