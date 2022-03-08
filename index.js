let containerEl = document.getElementById("container");
const url = "https://jsonplaceholder.typicode.com/users";
let table = document.createElement("table");
let headerRow = document.createElement("tr");
let headers = ['S.No', 'Email', 'Name', 'Phone', 'Website'];

function getHeaders(){
    headers.forEach(each => {
        let header = document.createElement("th");
        header.textContent = each;
        headerRow.appendChild(header);
    })
    table.appendChild(headerRow);
}

function createAndAppendSearchResult(result) {
    let { id, email, phone, name, website } = result;

    let trEl1 = document.createElement("tr");
    table.appendChild(trEl1);

    let thEl1 = document.createElement("th");
    thEl1.textContent = id;
    trEl1.appendChild(thEl1);

    let thEl2 = document.createElement("th");
    thEl2.textContent = email;
    trEl1.appendChild(thEl2);

    let thEl3 = document.createElement("th");
    thEl3.textContent = name;
    trEl1.appendChild(thEl3);

    let thEl4 = document.createElement("th");
    thEl4.textContent = phone;
    trEl1.appendChild(thEl4);

    let thEl5 = document.createElement("th");
    thEl5.textContent = website;
    trEl1.appendChild(thEl5);

    containerEl.appendChild(table);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
      createAndAppendSearchResult(result);
    }
}

const fetchUsers = async() => {
    const response = await fetch(url);
    const jsonData = await response.json();
    getHeaders();
    displayResults(jsonData);
}


function getUsers(){
    fetchUsers();
}