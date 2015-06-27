var bcrypt = require('bcryptjs'),
    Q = require('q'),
    config = require('./../config.js'),
    processingResult = require('./../common/processing_result.js'),
    paymentProcessing = require('./../common/payment_processing.js'),
    userRepo = require('./../repositories/user_repository.js');



// Register Strategy
exports.localReg = function (username, password, requestBody) {
    var deferred = Q.defer();
    var result = new processingResult.ProcessingResult();

    var hash = bcrypt.hashSync(password, 8);
    var user = {
        "username": username,
        "password": hash,
        "sex": requestBody.sex
    };

    userRepo.getUser(username)
        .then(function (foundUser){
            if(foundUser){
                result.errorMessage = "Email already exists.";
                deferred.resolve(result);
            }
            else {
                var paymentToken = requestBody.paymentToken;

                paymentProcessing.chargeCard(paymentToken, config.productAmount, config.productDescription)
                    .then(function(response){
                        if(!response.isSuccessful){
                            deferred.resolve(response);
                        }
                        else{
                            userRepo.insertNewUser(user)
                                .then(function (insertedUser) {
                                    result.isSuccessful = true;
                                    result.data = insertedUser;
                                    deferred.resolve(result);
                                })
                                .fail(function (err) {
                                    result.errorMessage = "Could not create new user. Please contact support ASAP.";
                                    deferred.resolve(result);
                                });
                        }
                    });
            }
        })
        .fail(function(err){
            result.errorMessage = "Server error. Please try again.";
            deferred.resolve(err);
        });

    return deferred.promise;
};

// Authorization Strategy
exports.localAuth = function (username, password) {
    var deferred = Q.defer();
    var result = new processingResult.ProcessingResult();

    userRepo.getUser(username)
        .then(function(foundUser){
            if(!foundUser){
                result.errorMessage = "Username is incorrect.";
                deferred.resolve(result);
            }
            else{
                var hash = foundUser.password;

                if (bcrypt.compareSync(password, hash)) {
                    result.isSuccessful = true;
                    result.data = foundUser;
                    deferred.resolve(result);
                } else {
                    result.errorMessage = "Password is incorrect.";
                    deferred.resolve(result);
                }
            }
        })
        .fail(function(err) {
            result.errorMessage = err;
            deferred.resolve(result);
        });

    return deferred.promise;
}