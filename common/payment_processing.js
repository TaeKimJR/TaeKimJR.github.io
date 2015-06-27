var Q = require('q'),
    config = require('./../config.js'),
    processingResult = require('./../common/processing_result.js'),
    stripe = require("stripe")("sk_test_ZUW4LCizEx0Eoxa0hRNObWc4");
    // TODO: change stripe id to use environment variable

exports.chargeCard = function (stripeToken, chargeAmount, chargeDescription) {
    var deferred = Q.defer();
    var result = new processingResult.ProcessingResult();

    var charge = stripe.charges.create({
        amount: chargeAmount,
        currency: "usd",
        source: stripeToken,
        description: chargeDescription
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            result.errorMessage = "Could not charge the given Credit Card. Please try again.";
            deferred.resolve(result);
        }
        else{
            result.isSuccessful = true;
            result.data = true;
            deferred.resolve(result);
        }
    });

    return deferred.promise;
};