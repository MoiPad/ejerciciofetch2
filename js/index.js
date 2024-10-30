// codigo js


fetch("https://api.escuelajs.co/api/v1/users")
  .then((response) => response.json())
  .then((data) => {
    let cards = ''

    for (let user of data) {
      cards += `
        <div class='col-4'>
          <div class='card' style='width: 18rem;'>
            <img src='${user.avatar}' class='card-image-top' alt='image avatar'>
            <div  class ='card-body'>
                <h5 class='card-title'>${user.name}</h5>
                <p class ='card-text'>${user.email}</p>
                <p class='card-text'>${user.password}</p>
              <a href='#' class='btn btn-primary'>Mas información</a>
            </div>
          </div>
        </div>

        `
      document.getElementById('api-data').innerHTML = cards
    }

  })
