import {Age} from './../src/super-galactic-age-calculator';
describe('Temp', function()
{
  let temp;

  beforeEach(function() {
    temp = new Age();
  });

  it('should show how beforeEach() works', function() {
    console.log(temp.age);
  });

  it('sample test', function() {
    
    expect(true).toEqual(true);
  });

});
