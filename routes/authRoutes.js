const { Router } = require('express');
const AuthService = require('../services/authService');
const { loginUserValid } = require('../middlewares/login.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', loginUserValid, (req, res, next) => {
    try {
        // TODO: Implement login action (get the user if it exist with entered credentials)
        const email = req.body.email;
        const password = req.body.password;
        const user = AuthService.login({ email });
        if (!user) {
            res.status(401).send({
                error: true,
                message: 'Credentials are invalid',
            });
        }
        if (password === user.password) {
            res.json(user);
        } else {
            res.status(401).json({
                error: true,
                message: 'Credentials are invalid',
            });
        }
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;
