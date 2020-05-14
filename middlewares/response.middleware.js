const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    const { statusCode, message } = res.err || {};
    if (message) {
        res.statusCode = statusCode;
        res.json({ error: true, message });
    } else {
        res.json(res.locals);
    }

    next();
};

/**
 * Также необходимо реализовать middleware для выдачи ответа сервера по следующим правилам:
 * Если все прошло хорошо - вернуть статус 200 и JSON
 * Ошибки
 ** Ошибки запроса (валидация, проблемы в обработке) - вернуть статус 400 и JSON с ошибкой
 ** Если что-то не найдено - вернуть статус 404 и JSON с ошибкой
 * JSON ошибки формата
 * {
    error: true,
    message: ''
 *}
 */

exports.responseMiddleware = responseMiddleware;