const { emailValidate,
    passwordValidate} = require('../utils/validation');
/** 
 * Validates the email
 * Validates the password
 * password and confirmPassword match
*/
 

const registerInitialChecks = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword == 'string' &&
        emailValidate(email) &&
        passwordValidate(password) &&
        password === confirmPassword
    ) {
        next();
    }
    )
    }