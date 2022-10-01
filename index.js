let tableContainer = document.querySelector("tbody");
let loginBtn = document.querySelector("#login-btn");


 async function fetchingData () {

  let restaurantsUrl = 'https://mini-yelp2022.herokuapp.com/restaurants/'
  let citiesUrl = 'https://mini-yelp2022.herokuapp.com/cities/'


  let restaurants, cities, restaurantsData, citiesData, detailsPageData, detailsUrl

  restaurantsData = await fetch(restaurantsUrl)
  citiesData = await fetch(citiesUrl)

  restaurants = await restaurantsData.json()
  cities = await citiesData.json()
  
  const data = restaurants.map((restaurant) => {
    let city = cities.find(city => {
      return city.id === restaurant.city_id
    })
    return {
      ...restaurant,
      city_name: city.name
    }
  })

  return data

}

async function renderListItems()  {
  
  let restaurantsData = await fetchingData()
  console.log(restaurantsData)

   let html = ''

    restaurantsData.forEach((table) => {

      let htmlText = 
                  ` <div class="table">
                      <tr class="list">
                      <td>${table.id}</td>
                      <td class="name">${table.name}</td>
                      <td class="city">${table.city_name}</td>
                      <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          Details
                        </button>
                      </td>
                      <!-- Button trigger modal -->
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">${table.name}</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <img src="${table.picture}" alt="" width="100%" />
                              <p class="mt-4"><b>City</b>: ${table.city_name}<p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr> 
                  </div>`
                
                    
       html += htmlText;

       tableContainer.innerHTML = html
      
    });
    
  };

     renderListItems()

const redirectToLoginPage = () => {
  loginBtn.addEventListener('click', (event) => {
    window.location = './login.html';
  });

}

const input = document.getElementById("input-text");

function tableSearch(e) {
  const tableRow = document.querySelectorAll('.list')
  const term = e.target.value.toUpperCase();

  tableRow.forEach(row => {
    console.log(row.querySelector('.name'))
    const restaurantName = row.querySelector('.name').innerText.toUpperCase()
    const restaurantCity = row.querySelector('.city').innerText.toUpperCase()
    
    if(restaurantName.indexOf(term) > -1 || restaurantCity.indexOf(term) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  })
}

input.addEventListener('input', tableSearch);