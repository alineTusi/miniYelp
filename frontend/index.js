let tableContainer = document.querySelector(".table-container");

 async function fetchingData () {

  let url = 'http://localhost:3001/restaurants'
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }

}
console.log(fetchingData())





async function renderListItems()  {

  let data = await fetchingData()

   let html = ''

    data.forEach((table) => {
    
      let htmlText = `<div class="table-container">
               <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Restaurants</th>
                              <th scope="col">City</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td scope="row">${table.id}</td>
                              <td>${table.name}</td>
                              <td>${table.city}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>`;
       html += htmlText;

       tableContainer.innerHTML = html
      
    });
  
  };

     renderListItems()















function tableSearch() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector(".table");
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