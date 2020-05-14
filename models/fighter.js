class Fighter {
    constructor({ name, health, power, defense }) {
        this.name = name;
        this.health = Number(health);
        this.power = Number(power);
        this.defense = Number(defense);
    }
}

module.exports.Fighter = Fighter;
