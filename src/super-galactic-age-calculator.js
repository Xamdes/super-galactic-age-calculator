export class Age
{
  constructor()
  {
    this.age = 0;
  }

  static CompareDates(date1,date2)
  {
    let elapsed = date2.getTime() - date1.getTime() ;
    elapsed /= 1000;
    return elapsed;
  }

  static CreateDate(year, month, day)
  {
    return new Date(year, month, day);
  }

  static GetCurrentDate()
  {
    return new Date();
  }

  static YearsToSeconds(age)
  {
    let offset = 2000;
    age = age + offset;
    let stringAge = age.toString();
    let startString = offset.toString();
    let dateAge = new Date(stringAge, '01', '01');
    let start = new Date(startString, '01', '01');
    let seconds = dateAge.getTime() - start.getTime();
    seconds /= 1000;
    return seconds;
  }

  SetAge(age)
  {
    this.age = age;
  }

  GetMercuryYears()
  {
    return (this.age / .24);
  }

  GetVenusYears()
  {
    return (this.age / .62);
  }

  GetMarsYears()
  {
    return (this.age / 1.88);
  }

  GetJupiterYears()
  {
    return (this.age / 11.86);
  }

}