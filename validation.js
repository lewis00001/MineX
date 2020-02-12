// Validation
var Joi = require('@hapi/joi');

var registerValidation = function(data) {
    var schema = Joi.object({ 
        firstName: Joi.string() .min(6) .required(),
        lastName: Joi.string() .min(6) .required(),
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
      });
          // Lets valid the data before a user
    return schema.validate(data);
}

var loginValidation = function(data) {
    var schema = Joi.object({ 
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
      });
          // Lets valid the data before a user
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;