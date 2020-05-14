const { validateLoginInput } = require('helpers/login.validation');
const { getObjectValuesAsString } = require('../services/objectValuesAsString');

const loginUserValid = (req, res, next) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json({
            error: true,
            message: getObjectValuesAsString(errors),
        });
    }

    next();
};

exports.loginUserValid = loginUserValid;
