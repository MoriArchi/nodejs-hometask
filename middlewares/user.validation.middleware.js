//const { user } = require('../models/user');
const { validateUserInput } = require('helpers/user.validation');
const { getObjectValuesAsString } = require('../services/objectValuesAsString');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    const { errors, isValid } = validateUserInput(req.body);

    if (!isValid) {
        return res.status(400).json({
            error: true,
            message: getObjectValuesAsString(errors),
        });
    }

    next();
};

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    const { errors, isValid } = validateUserInput(req.body);

    if (!isValid) {
        return res.status(400).json({
            error: true,
            message: getObjectValuesAsString(errors),
        });
    }

    next();
};

/**
* Availability of fields
* Field format:
* firstName - notEmpty
* lastName - notEmpty
* email - allow IDN domains and special characters (like Umlauts) before and after the @ sign.
* phoneNumber - + 380xxxxxxxxx
* password - length> = 3
* Id in body of requests should be absent
* Extra fields should not go to the database
*/

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
