# Super Galactic Age Calculator

## Author

Steven Colburn

## Created

08/03/208

## Specifications Outline:

  * Static Function to convert year to seconds
    * Start with offset i.e using 2000 as start year
    * Use January 1st for month and year for both Date objects
    * Second Date Object is offset plus user age
    * Run getTime() on both objects returning milliseconds of both objects
      * Get the difference of age minus offset
      * Divide by 1000 to conver milliseconds to seconds
      * return seconds of age
  * Same as convert age to seconds but take two Date objects and find the difference between the two using getTime()
    * return result/1000
  * Get Age to Convert
    * For converting years take the age and divide by the modifier
      * Mercury Modifier: .24
      * Venus Modifier: .62
      * Mars Modifier: 1.88
      * Jupiter Modifier: 11.86
    * Return the result of the division
  * Take values that are useful for determining life expectancy or get expected life expectency from user
    * Return difference in years if user's age is greater than life expectancy represented as a negative number
    * Calculate User Life Expectancy base on users height( feet, inches), weight, biological sex

## Technology Used

HTML, CSS, Javascript, jQuery, Karma, Webpack

## Installation
Clone from:
https://github.com/Xamdes/super-galactic-age-calculator.git

## Commands

  * Run Karrma Tests
    * npm test
  * Build Project
    * npm build
  * Start Project
    *npm start
   * Lint Project
    * npm lint
  * Run Jasmine
    * npm jasmine

## License

The MIT License (MIT)

Copyright (c) 2018 Steven Colburn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.