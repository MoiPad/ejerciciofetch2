// codigo js

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let card = '<div class="row row-cols-1 rows-cols-md3 g-4">';

    for (let user of data) {
      card += `
                <div class="card">
            <img
              src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg"
              alt="test image"
              class="card-img-top"
            />
            <div class="card-body">
<h4 class="card-title">${user.name}</h5>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <strong>Nombre de usuairo: </strong>${user.username}
                </li>
                <li class="list-group-item">
                    <strong>Correo eletrnico: </strong>${user.email}
                </li>
                <li class="list-group-item">
                    <strong>Calle: </strong> ${user.address.street}
                </li>
                    <li class="list-group-item"><strong>Ciudad: </strong>${user.address.city}</li>
                <li class="list-group-item">
                    <strong>Telefono: </strong>${user.phone}
                </li>
                <li class="list-group-item">
                    <strong>Compania: </strong>${user.company.name}
                </li>
              </ul>
            </div>
  `;
    }
    card += "</div>";
    document.getElementById("card-list").innerHTML = card;
  });
