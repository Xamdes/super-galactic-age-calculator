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

  GetLifeExpectancy(ageExpect)
  {
    return (ageExpect - this.age);
  }

  static CalculateLifeExpectancy(feet, inches, weight, bioSex)
  {
    let startExpectancy = 65;
    let weightType = GetWeightType(feet, inches, weight);
    startExpectancy +=  ((3 - weightType) * 10);
    if (bioSex.toLowerCase() === "male")
    {
      startExpectancy += 5;
    }
    else
    {
      startExpectancy += 10;
    }
    return startExpectancy;
  }
}

function GetWeightType(feet, inches, weight)
{
  let height = feet + (inches / 100);
  let bmi = 0;
  if (height < 4.10)
  {
    height = 4.10;
  }
  else if (height > 6.04)
  {
    height = 6.04;
  }
  let maxNormal;
  let maxOverweight;
  switch (height)
  {
    case 4.10:
      maxNormal = 118;
      maxOverweight = 142;
      break;
    case 4.11:
      maxNormal = 123;
      maxOverweight = 147;
      break;
    case 5.00:
      maxNormal = 127;
      maxOverweight = 152;
      break;
    case 5.01:
      maxNormal = 131;
      maxOverweight = 157;
      break;
    case 5.02:
      maxNormal = 135;
      maxOverweight = 163;
      break;
    case 5.03:
      maxNormal = 140;
      maxOverweight = 168;
      break;
    case 5.04:
      maxNormal = 144;
      maxOverweight = 173;
      break;
    case 5.05:
      maxNormal = 149;
      maxOverweight = 179;
      break;
    case 5.06:
      maxNormal = 154;
      maxOverweight = 185;
      break;
    case 5.07:
      maxNormal = 158;
      maxOverweight = 190;
      break;
    case 5.08:
      maxNormal = 163;
      maxOverweight = 196;
      break;
    case 5.09:
      maxNormal = 168;
      maxOverweight = 202;
      break;
    case 5.10:
      maxNormal = 173;
      maxOverweight = 208;
      break;
    case 5.11:
      maxNormal = 178;
      maxOverweight = 214;
      break;
    case 6.00:
      maxNormal = 183;
      maxOverweight = 220;
      break;
    case 6.01:
      maxNormal = 188;
      maxOverweight = 226;
      break;
    case 6.02:
      maxNormal = 193;
      maxOverweight = 232;
      break;
    case 6.03:
      maxNormal = 199;
      maxOverweight = 239;
      break;
    case 6.04:
      maxNormal = 204;
      maxOverweight = 245;
      break;
    default:
      maxNormal = 180;
      maxOverweight = 210;
  }
  if (weight < maxNormal)
  {
    return 0;
  }
  else if (weight < maxOverweight)
  {
    return 1;
  }
  else
  {
    return 2;
  }
}