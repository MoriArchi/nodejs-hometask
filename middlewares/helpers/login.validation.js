const isEmpty = require('lodash.isempty');
const Validator = require('./validator');

const validateLoginInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.containOnlyNecessaryFields(data, 2)) {
        errors.fields = 'Should contain only necessary fields';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

exports.validateLoginInput = validateLoginInput;
