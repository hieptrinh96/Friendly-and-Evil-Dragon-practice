class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) {
    return dragons.map((dragon) => dragon.name);
  }
}

// const puff = new Dragon("Puff", "green");
// const trogdor = new Dragon("Trogdor", "more green");
// console.log(puff);
// console.log(puff.breathesFire());
// console.log(Dragon.getDragons(puff, trogdor));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
