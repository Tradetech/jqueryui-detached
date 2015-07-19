var $ui;

exports.getJQueryUI = function() {
    if (!$ui) {
        var jquery = require('jquery-detached-2.1.4');
        var decorator = require('./decorator');
        
        $ui = jquery.newJQuery();        
        decorator.addToJQuery($ui);
    }
    return $ui;
};

exports.clear = function() {
    $ui = undefined;
};