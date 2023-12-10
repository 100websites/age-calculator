const btnElement = document.getElementById('btn');
const birthdayElement = document.getElementById('birthday');
const resultAgeElement = document.getElementById('result');

function calculateAge() {
  const bday = birthdayElement.value;
  if (bday === '') {
    alert('Enter birthday');
  } else {
    const age = getAge(bday);
    //note the back tick
    resultAgeElement.innerText = `The age is ${age} ${
      age > 1 ? 'years' : 'year'
    }  old`;
  }
}

function getAge(bday) {
  //Date()  -- constructor in JS that gets date from browser
  const currentDate = new Date();
  const bdayDate = new Date(bday);
  let age = currentDate.getFullYear() - bdayDate.getFullYear();
  const month = currentDate.getMonth() - bdayDate.getMonth();
  //for cases where the birth day is on the same day/just a day or so from the current date
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < bdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

//event listener for a click, which calls function calculateAge
btnElement.addEventListener('click', calculateAge);
