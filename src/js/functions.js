function message() {
  alert("Hello World! It's my first message!")
}

function solveQ() {
  let a = document.getElementById('A').value;
  let b = document.getElementById('B').value;
  let c = document.getElementById('C').value;

  let D = b * b - 4 * a * c;

  if (D < 0) {
    document.getElementById('result').innerHTML = 'The equation has no solution' 
  } else if (D === 0) {
    let x = -b / (2 * a);
    document.getElementById('result').innerHTML = 'The equation has one solution: x = ' + x;
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    document.getElementById('result').innerHTML = '<b>The equation has two solutions:</b> <br> x1 = ' + x1 + '<br> x2 = ' + x2;
  }
}

function mTable() {
  let table = document.getElementById('multiplicationTable');
  for (let i = 1; i < 10; i++) {
    let row = table.insertRow(-1);
    for (let j = 1  ; j < 10; j++) {
      let cell = row.insertCell(-1);
      cell.innerHTML = i * j;
    }
  }
}

function bubble() {
  let input = document.getElementById('bubbleInput').value;
  let numbers = input.split(',').map(Number);
  let len = numbers.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if(numbers[j - 1] > numbers [j]) {
        let temp = numbers[j - 1];
        numbers[j - 1] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  document.getElementById('result').innerHTML = numbers.join(', ');
}
