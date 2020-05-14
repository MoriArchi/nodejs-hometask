//const { fighter } = require('../models/fighter');
const { validateFighterInput } = require('helpers/fighter.validation');
const { getObjectValuesAsString } = require('../services/objectValuesAsString');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const { errors, isValid } = validateFighterInput(req.body);

    if (!isValid) {
        return res.status(400).json({
            error: true,
            message: getObjectValuesAsString(errors),
        });
    }

    next();
};

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    const { errors, isValid } = validateFighterInput(req.body);

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
* name - not empty
* health - > 1
* power - >= 1 && <100
* defense - >= 1 && <100
* Id in body of requests should be absent
* Extra fields should not go to the database
*/

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
