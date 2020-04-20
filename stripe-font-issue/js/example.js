(function() {
    'use strict';

    var elements = stripe.elements({
        fonts: [
            {
                cssSrc: 'https://muzuro.github.io/stripe-font-issue/css/fonts/fonts.css',
            },
        ],
    });
    var elementStyles = {
        base: {
            fontFamily: '"GT Walsheim Pro Regular"',
            fontSize: '25px',
        },
    };
    var cardNumber = elements.create('cardNumber', {
        style: elementStyles,
    });
    cardNumber.mount('#example-card-number');
})();
