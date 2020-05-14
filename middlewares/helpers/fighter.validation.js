const isEmpty = require('lodash.isempty');
const Validator = require('./validator');

const validateFighterInput = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.health = !isEmpty(data.health.toString()) ? data.health : '';
    data.power = !isEmpty(data.power.toString()) ? data.power : '';
    data.defense = !isEmpty(data.defense.toString()) ? data.defense : '';

    if (!Validator.containOnlyNecessaryFields(data, 4)) {
        errors.fields = 'Should contain only necessary fields';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Fighter Name is required';
    }

    if (Validator.isEmpty(data.health)) {
        errors.health = 'Health parameter is required';
    }

    if (!Validator.isAtLeast(data.health, 1)) {
        errors.health = 'Health parameter should be at least 1';
    }

    if (!Validator.isNumber(data.health)) {
        errors.health = 'Health parameter should be a number';
    }

    if (Validator.isEmpty(data.power)) {
        errors.power = 'Power parameter is required';
    }

    if (
        !Validator.isLessThan(data.power, 101)
    ) {
        errors.power = 'Power parameter should be less than 100';
    }

    if (!Validator.isNumber(data.power)) {
        errors.power = 'Power parameter should be a number';
    }

    if (Validator.isEmpty(data.defense)) {
        errors.defense = 'Defense parameter is required';
    }

    if (
        !Validator.isAtLeast(data.defense, 1) ||
        !Validator.isLessThan(data.defense, 11)
    ) {
        errors.defense = 'Defense parameter should be in range [1, 10]';
    }

    if (!Validator.isNumber(data.defense)) {
        errors.defense = 'Defense parameter should be a number';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

exports.validateFighterInput = validateFighterInput;
