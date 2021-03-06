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
    const date1 = new Date('2000', '12', '01');
    const date2 = new Date('2000', '12', '02');
    expect(Age.CompareDates(date1, date2)).toEqual(86400);
  });

  
  it('should convert age year to age in seconds', function () 
  {
    const seconds = Age.YearsToSeconds(27);
    expected = 852076800;
    expect(seconds).toEqual(expected);
  });

  it('should convert age to Mercury years', function () 
  {
    const testAge = 27;
    const testMod = .24;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetMercuryYears()).toEqual(expected);
  });

  it('should convert age to Venus years', function () 
  {
    const testAge = 27;
    const testMod = .62;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetVenusYears()).toEqual(expected);
  });

  it('should convert age to Mars years', function () 
  {
    const testAge = 27;
    const testMod = 1.88;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetMarsYears()).toEqual(expected);
  });

  it('should convert age to Jupiter years', function () 
  {
    const testAge = 27;
    const testMod = 11.86;
    temp.SetAge(testAge);
    expected = testAge / testMod;
    expect(temp.GetJupiterYears()).toEqual(expected);
  });

  it('should test users life expectancy given age of user and expected life span', function () 
  {
    const testAge = 27;
    const testLifeSpan = 100;
    expected = 73;
    temp.SetAge(testAge);
    expect(temp.GetLifeExpectancy(testLifeSpan)).toEqual(expected);
  });

  it('should return negative value representing user is older than life expectancy', function () 
  {
    const testAge = 125;
    const testLifeSpan = 100;
    expected = -25;
    temp.SetAge(testAge);
    expect(temp.GetLifeExpectancy(testLifeSpan)).toEqual(expected);
  });

  it('should take feet,inches,weight and biological sex to find life expectancy', function () 
  {
    expected = 90;
    expect(Age.CalculateLifeExpectancy(5,10,200,"Male")).toEqual(expected);
  });

  it('should test user age against life expectancy based on feet,inches,weight and if user is male', function () 
  {
    const testAge = 27;
    const testLifeSpan = Age.CalculateLifeExpectancy(5, 10, 200, "Male");
    expected = 63;
    temp.SetAge(testAge);
    expect(temp.GetLifeExpectancy(testLifeSpan)).toEqual(expected);
  });

  it('should test user age against life expectancy based on feet,inches,weight and is user is female', function () 
  {
    const testAge = 27;
    const testLifeSpan = Age.CalculateLifeExpectancy(5, 10, 200, "Female");
    expected = 68;
    temp.SetAge(testAge);
    expect(temp.GetLifeExpectancy(testLifeSpan)).toEqual(expected);
  });
  
});
