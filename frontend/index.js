let tableContainer = document.querySelector("tbody");
let loginBtn = document.querySelector("#login-btn")



 async function fetchingRestaurantsData () {

  let url = 'https://mini-yelp2022.herokuapp.com/restaurants/'
  try {
      let res = await fetch(url);
     let result = await res.json();
     console.log(result)
     return result
    
  } catch (error) {
      console.log(error);
  }

}

console.log(fetchingRestaurantsData())


async function fetchingCitiesData () {

  let url = 'https://mini-yelp2022.herokuapp.com/cities/'
  try {
      let res = await fetch(url);
     let result = await res.json();
     console.log(result)
     return result
    
  } catch (error) {
      console.log(error);
  }

}
console.log(fetchingCitiesData())




async function renderListItems()  {

  let restaurantsData = await fetchingRestaurantsData()
  // console.log(citiesData)

   let html = ''

    restaurantsData.forEach((table) => {

      let htmlText = 
                  `  <tr>
                      <td scope="row">${table.id}</td>
                      <td>${table.name}</td>
                      <td>${citiesData.id}</td>
                    </tr> `
                
                    
       html += htmlText;

       tableContainer.innerHTML = html
      
    });
    
  };

     // renderListItems()


     async function renderCityList () {
      let citiesData = await fetchingCitiesData()
      let html = ''


      citiesData.forEach((city) => {
                let htmlText = 
                `  <tr>
                     <td scope="row">${city.id}</td>
                    <td>${city.name}</td>
                  </tr> `
              
                  
        html += htmlText;
        
        tableContainer.innerHTML = html
        
        
        
              })

     }
     renderCityList()

     async function renderRestaurantsList (cityId) {
      let restaurantsData = await fetchingRestaurantsData()
      let html = ''


      restaurantsData.forEach((restaurants) => {
                let htmlText = 
                `  <tr>
                     <td scope="row">${restaurants.id}</td>
                    <td>${restaurants.name}</td>
                  </tr> `
              
                  
        html += htmlText;
        
        tableContainer.innerHTML = html
        
        
        
              })

     }
     renderRestaurantsList()

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