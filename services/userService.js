const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user
    create(user) {
        return UserRepository.create(user);
    }

    getUsers() {
        const users = UserRepository.getAll();
        if (!users) {
            return null;
        }
        return users;
    }

    update(id, data) {
        const updatedUser = UserRepository.update(id, data);
        if (!updatedUser) {
            return null;
        }
        return updatedUser;
    }

    remove(id) {
        const removedUser = UserRepository.delete(id);
        if (!removedUser) {
            return null;
        }
        return removedUser;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();