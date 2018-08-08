var constants = require('./constants.js');
var methods = require('./methods.js');

export class galacticAge {
  constructor(birthday, age){
    this.birthday = birthday;
    this.lifeExpectancy = 75;
    this.age = age;
  }

  // I believe this has to be divided by 1000 because the datetime method
  // seems to return the answer in milliseconds.
  ageInSeconds() {
    let userBirthday = new Date(this.birthday);
    return Math.floor((Date.now() - userBirthday.getTime()) / 1000);
  }
  // All galactic ages are a function that finds their age on Earth based on their
  // birthday and then divides that by the difference in that planets' years
  // and Earth's years. This should return the age that they are on that
  // particular planet.
  ageOnEarth() {
    let ageOnEarth = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR),2);
    return ageOnEarth;
  }
  ageOnMercury() {
    let ageOnMercury = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.MERCURY_YEAR / constants.EARTH_YEAR)),2);
    return ageOnMercury;
  }
  ageOnVenus() {
    let ageOnVenus = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.VENUS_YEAR / constants.EARTH_YEAR)),2);
    return ageOnVenus;
  }
  ageOnMars() {
    let ageOnMars = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.MARS_YEAR / constants.EARTH_YEAR)),2);
    return ageOnMars;
  }
  ageOnJupiter() {
    let ageOnJupiter = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.JUPITER_YEAR / constants.EARTH_YEAR)),2);
    return ageOnJupiter;
  }
  ageOnSaturn() {
    let ageOnSaturn = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.SATURN_YEAR / constants.EARTH_YEAR)),2);
    return ageOnSaturn;
  }
  ageOnUranus() {
    let ageOnUranus = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.URANUS_YEAR / constants.EARTH_YEAR)),2);
    return ageOnUranus;
  }
  ageOnNeptune() {
    let ageOnNeptune = methods.roundTo((this.ageInSeconds() / constants.SECONDS_IN_A_YEAR / (constants.NEPTUNE_YEAR / constants.EARTH_YEAR)),2);
    return ageOnNeptune;
  }
  mercuryLifeExpectancy() {
    let mercuryLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.MERCURY_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.MERCURY_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - mercuryLifeExpectancy),2);
    if (userAge > mercuryLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return mercuryLifeExpectancy;
    }
  }
  venusLifeExpectancy() {
    let venusLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.VENUS_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.VENUS_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - venusLifeExpectancy),2);
    if (userAge > venusLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return venusLifeExpectancy;
    }
  }
  marsLifeExpectancy() {
    let marsLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.MARS_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.MARS_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - marsLifeExpectancy),2);
    if (userAge > marsLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return marsLifeExpectancy;
    }
  }
  jupiterLifeExpectancy() {
    let jupiterLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.JUPITER_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.JUPITER_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - jupiterLifeExpectancy),2);
    if (userAge > jupiterLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return jupiterLifeExpectancy;
    }
  }
  saturnLifeExpectancy() {
    let saturnLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.SATURN_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.SATURN_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - saturnLifeExpectancy),2);
    if (userAge > saturnLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return saturnLifeExpectancy;
    }
  }
  uranusLifeExpectancy() {
    let uranusLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.URANUS_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.URANUS_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - uranusLifeExpectancy),2);
    if (userAge > uranusLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return uranusLifeExpectancy;
    }
  }
  neptuneLifeExpectancy() {
    let neptuneLifeExpectancy = methods.roundTo((this.lifeExpectancy / (constants.NEPTUNE_YEAR / constants.EARTH_YEAR)),2);
    let userAge = (this.age / (constants.NEPTUNE_YEAR / constants.EARTH_YEAR));
    let amountAboveLifeExpectancy = methods.roundTo((userAge - neptuneLifeExpectancy),2);
    if (userAge > neptuneLifeExpectancy) {
      return amountAboveLifeExpectancy;
    } else {
    return neptuneLifeExpectancy;
    }
  }
}
