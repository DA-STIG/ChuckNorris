// Chuck Noris Jokes - api http://www.icndb.com/api/

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // we need the number of jokes -from the input
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      // this.responseText return JSON obj containing the jokes - we need to JSON.parse() it -to an actual obj

      let output = '';

      // check if the type is succes
      if (response.type === 'success') {
        //we want to loop the jokes array -and we want to append each joke to the output
        //we append using +=

        //response is an object -  we want to lopp through the value that holds the jokes []
        response.value.forEach(function(joke) {
          output += `<li><em>${joke.joke}</em></li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
