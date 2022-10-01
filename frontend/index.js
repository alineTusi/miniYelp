let tableContainer = document.querySelector("tbody");
let loginBtn = document.querySelector("#login-btn")

 async function fetchingData () {

  let restaurantsUrl = 'https://mini-yelp2022.herokuapp.com/restaurants/'
  let citiesUrl = 'https://mini-yelp2022.herokuapp.com/cities/'

  let restaurants, cities, restaurantsData, citiesData

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
                  `  <tr>
                      <td>${table.id}</td>
                      <td>${table.name}</td>
                      <td>${table.city_name}</td>
                      <td><a href='restaurants-page.html?id=${table.id}'>Url</a></td>
                    </tr> `
                
                    
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
function tableSearch() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("tbody");
  tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}