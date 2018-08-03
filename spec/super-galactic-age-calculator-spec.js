import {Age} from './../src/super-galactic-age-calculator';
describe('Age Calculator', function()
{
  let temp;
  let expected;

  beforeEach(function () 
  {
    temp = new Age();
    expected = 0;
  });

  it('should show how beforeEach() works', function () 
  {
    console.log(temp.age);
  });

  it('should compare to Date objects', function () 
  {
    let date1 = new Date('2000', '12', '01');
    let date2 = new Date('2000', '12', '02');
    expect(Age.CompareDates(date1, date2)).toEqual(86400);
  });

  
  it('should convert age year to age in seconds', function () 
  {
    let seconds = Age.YearsToSeconds(27);
    expected = 852076800;
    expect(seconds).toEqual(expected);
  });

  it('should convert age to Mercury years', function () 
  {
    let testAge = 27;
    let testMod = .24;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetMercuryYears()).toEqual(expected);
  });

  it('should convert age to Venus years', function () 
  {
    let testAge = 27;
    let testMod = .62;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetVenusYears()).toEqual(expected);
  });

  it('should convert age to Mars years', function () 
  {
    let testAge = 27;
    let testMod = 1.88;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetMarsYears()).toEqual(expected);
  });

  it('should convert age to Jupiter years', function () 
  {
    let testAge = 27;
    let testMod = 11.86;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetJupiterYears()).toEqual(expected);
  });
  

});
