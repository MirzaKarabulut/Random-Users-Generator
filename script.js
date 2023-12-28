const button = document.querySelector('#generate');


function getData() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data)=>displayUsers(data.results[0]))
}

function displayUsers(user) {
  const userDiv = document.querySelector('#user');

  if (user.gender === 'male') {
    document.body.style.backgroundColor = 'blue';
  } else {
    document.body.style.backgroundColor = 'red';
  }

  userDiv.innerHTML = `
            <div class="img">
                <img src=${user.picture.large}>
            </div>
            <div class="">
                <h5>Name: <span>${user.name.first} ${user.name.last}</span></h5>
                <h5>Email: <span>${user.email}</span></h5>
                <h5>Phone: <span>${user.phone}</span></h5>
                <h5>Location: <span>${user.location.country}</span></h5>
                <h5>Age: <span>${user.dob.age}</span></h5>
            </div>
    `
}


button.addEventListener('click', getData);