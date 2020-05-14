class User {
    constructor({ firstName, lastName, email, phoneNumber, password }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

module.exports.User = User;
