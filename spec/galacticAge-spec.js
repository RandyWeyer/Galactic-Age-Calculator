import { galacticAge } from './../src/galacticAge.js';
var constants = require('../src/constants.js');

describe('galacticAge', function() {

  it('should return the user age in seconds', function(){
    let today = new Date();
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    let testDate = new Date(testGalacticAge.birthday);
    expect(testGalacticAge.ageInSeconds()).toEqual((Math.floor((today.getTime() - testDate.getTime()) / 1000)));
});
  it('should return users age in earth years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnEarth()).toEqual(30.87);
  });
  it('should return users age in mercury years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnMercury()).toEqual(128.16);
  });
  it('should return users age in venus years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnVenus()).toEqual(50.17);
  });
  it('should return users age in mars years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnMars()).toEqual(16.41);
  });
  it('should return users age in jupiter years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnJupiter()).toEqual(2.6);
  });
  it('should return users age in saturn years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnSaturn()).toEqual(1.05);
  });
  it('should return users age in uranus years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnUranus()).toEqual(.37);
  });
  it('should return users age in neptune years', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.ageOnNeptune()).toEqual(.19);
  });
  it('should return users life expectancy on mercury', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.mercuryLifeExpectancy()).toEqual(311.41);
  });
  it('should return how far the user is past the life expectancy on mercury', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.mercuryLifeExpectancy()).toEqual(103.8);
  });
  it('should return users life expectancy on venus', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.venusLifeExpectancy()).toEqual(121.92);
  });
  it('should return how far the user is past the life expectancy on venus', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.venusLifeExpectancy()).toEqual(40.63);
  });
  it('should return users life expectancy on mars', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.marsLifeExpectancy()).toEqual(39.88);
  });
  it('should return how far the user is past the life expectancy on mars', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.marsLifeExpectancy()).toEqual(13.29);
  });
  it('should return users life expectancy on jupiter', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.jupiterLifeExpectancy()).toEqual(6.32);
  });
  it('should return how far the user is past the life expectancy on jupiter', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.jupiterLifeExpectancy()).toEqual(2.11);
  });
  it('should return users life expectancy on saturn', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.saturnLifeExpectancy()).toEqual(2.55);
  });
  it('should return how far the user is past the life expectancy on saturn', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.saturnLifeExpectancy()).toEqual(.84);
  });
  it('should return users life expectancy on uranus', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.uranusLifeExpectancy()).toEqual(.89);
  });
  it('should return how far the user is past the life expectancy on uranus', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.uranusLifeExpectancy()).toEqual(.3);
  });
  it('should return users life expectancy on neptune', function(){
    let testGalacticAge = new galacticAge('1987-10-04', 30.87);
    expect(testGalacticAge.neptuneLifeExpectancy()).toEqual(.46);
  });
  it('should return how far the user is past the life expectancy on neptune', function(){
    let testGalacticAge = new galacticAge('1918-08-01', 100);
    expect(testGalacticAge.neptuneLifeExpectancy()).toEqual(.15);
  });
})
