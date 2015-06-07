/* jslint node: true */
/* global describe, it, expect */

"use strict";

var testUtil = require("./test-util");

describe("index.js", function () {

    it("- test", function (done) {
        testUtil.onPage(function(window) {
            var $ = require("jquery-detached-2.1.4").getJQuery();            
            var jqueryui = require("../js/index");
            
            jqueryui.addToJQuery($);
            
            expect($.fn.jquery).toBe('2.1.4');

            expect(window.$).not.toBeDefined();
            expect(window.jQuery).not.toBeDefined();

            var divOnPage = $('#divOnPage');
            expect(divOnPage.text()).toBe('jQueryUI is everywhere');
            expect(divOnPage.dialog).toBeDefined();
   
            done();
        });
    });
});
