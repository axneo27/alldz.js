const allUsers = "https://my-json-server.typicode.com/axneo27/json_test/users";

async function getUsers() {
    const response = await fetch(allUsers);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); 
    console.log(data);

    for (const user of data){
        let el = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${user.name}
  </button>
  <ul class="dropdown-menu">
         `;
        for (let i = 0; i < user.tasks.length; i++){
            el+= `<li><a class="dropdown-item" href="#">${user.tasks[i]}</a></li>`;
        }
        el+= `</ul></div>`;
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML += el;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getUsers();
});