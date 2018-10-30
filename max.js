
function max(numbers) {
    let i = 0;
    let maxNumber = numbers[0];
    while (i < numbers.length) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
  
      i++;
    }
  
    return maxNumber;
  }
  
  console.log(max([1,22,33,777,10]))

  
  function min(numbers) {
    let i = 0;
    let minNumber = numbers[0];
    while (i < numbers.length) {
      if (numbers[i] > minNumber) {
        maxNumber = numbers[i];
      }
  
      i++;
    }
  
    return maxNumber;
  }
  
  console.log(min([1,22,33,777,10]))