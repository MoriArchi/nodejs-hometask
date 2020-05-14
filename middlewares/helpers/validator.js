class Validator {
    isEmpty = (value) => {
        return value === '' ? true : false;
    };

    isNumber = (value) => {
        if (typeof value === 'number') return true;
        return /^\d+$/g.test(value);
    };

    isAtLeast = (value, min) => {
        return Number(value) >= min;
    };

    isLessThan = (value, max) => {
        return Number(value) < max;
    };

    isEmail = (value) => {
        return /^[\w.+-_]+@[^.][\w.-]*\.[\w-]{2,63}$/gi.test(value);
    };

    isPhoneNumber = (value) => {
        return /^\+380(\d{9})$/g.test(value);
    };

    containOnlyNecessaryFields = (object, count) => {
        return Object.keys(object).length === count;
    };

    isLength = (value, { min, max }) => {
        if (min) {
            if (max) {
                return value.length >= min && value.lenght < max;
            }
            return value.length >= min;
        }
    };
}

module.exports = new Validator();
