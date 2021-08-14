module.exports = function toReadable (number) {
    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenToNineteen = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dec = ['', 'ten', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  
    let result = '';

    if (number === 0) {
        return 'zero';
    }

    if (number >= 100) {
        result += `${numbers[String(number - number % 100) / 100]} hundred `;
    }
    
    if (number % 100 <= 19 && number % 100 >= 10) {
      result += `${tenToNineteen[number % 10 + 1]}`;
    } else {
      result += `${dec[(number % 100 - number % 10) / 10]}`;
      result += `${numbers[number % 10]}`;
    }
  
    return result.trim();
  }
