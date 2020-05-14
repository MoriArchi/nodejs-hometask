const isEmpty = require('lodash.isempty');
const Validator = require('./validator');

const validateUserInput = (data) => {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.containOnlyNecessaryFields(data, 5)) {
        errors.fields = 'Should contain only necessary fields';
    }

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First Name is required';
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last Name is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = 'Phone number is required';
    }

    if (!Validator.isPhoneNumber(data.phoneNumber)) {
        errors.phoneNumber = 'Phone number should have format: +380xxxxxxxxx';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (!Validator.isLength(data.password, { min: 3 })) {
        errors.password = 'Password should be at least 3 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

exports.validateUserInput = validateUserInput;
