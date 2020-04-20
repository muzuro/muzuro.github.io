(function() {
    'use strict';

    var elements = stripe.elements({
        fonts: [
            {
                cssSrc: 'http://db.onlinewebfonts.com/c/0abeb2471faeb5269db428b9eac2075e?family=GT+Walsheim+Pro+Regular',
            },
        ],
    });
    var elementStyles = {
        base: {
            fontFamily: 'GT Walsheim Pro Regular',
            fontSize: '25px',
        },
    };
    var cardNumber = elements.create('cardNumber', {
        style: elementStyles,
    });
    cardNumber.mount('#example-card-number');
})();
