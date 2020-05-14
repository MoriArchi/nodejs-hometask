const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    create(fighter) {
        return FighterRepository.create(fighter);
    }

    getFighters() {
        const fighters = FighterRepository.getAll();
        if (!fighters) {
            return null;
        }
        return fighters;
    }

    update(id, data) {
        const updatedFighter = FighterRepository.update(id, data);
        if (!updatedFighter) {
            return null;
        }
        return updatedFighter;
    }

    remove(id) {
        const removedFighter = FighterRepository.delete(id);
        if (!removedFighter) {
            return null;
        }
        return removedFighter;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FighterService();
