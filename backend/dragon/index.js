const TRAITS = require("../data/traits.json");

const DEFAULT_PROPERTIES = {
  nickname: "unnammed",
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAITS => {
      const traitType = TRAITS.type;
      const traitValue = TRAITS.values;

      const traitValues =
        traitValue[Math.floor(Math.random() * traitValue.length)];

      traits.push({ traitType, traitValues });
    });
    return traits;
  }
};

class Dragon {
  constructor({ birthdate, nickname, traits, generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

module.exports = Dragon;
