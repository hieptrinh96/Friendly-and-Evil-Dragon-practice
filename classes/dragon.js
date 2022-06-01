class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    // test specs indicate that using equal means we need to return something
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  // could use an the rest operator since there are multiple dragons 
  // we also know to return the names of those dragons 
  static getDragons(...dragons) {
    return dragons.map(dragon => dragon.name);

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}