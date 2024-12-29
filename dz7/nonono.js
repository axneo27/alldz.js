const products_url = `https://dummyjson.com/products`;
const products_list = document.getElementById('products-list');
const ShowMoreButton = document.getElementById('show-more-button');

let limit = 5;
let skip = 0;
let total = 0;

async function loadProducts(){

    let query = `${products_url}?limit=${limit}&skip=${skip}`;

    let res = await fetch(query);
    console.log("Status: " + res.status);

    let data = await res.json();
    console.log(data);

    total = data.total;

    for (const product of data.products){
        products_list.innerHTML +=`<dt>[${product.id}]</dt><dt> - ${product.title}</dt>`;
        products_list.innerHTML +=`<dd>${product.description}</dd>`;
        products_list.innerHTML +=`<dd>${product.price}</dd>`;
        products_list.innerHTML +=`<button class="see-more" data-id="${product.id}">See more info</button>`;
    }

    document.querySelectorAll('.see-more').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-id');
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

ShowMoreButton.onclick = () =>{
    if (skip >= total){
        alert("No more products");
    }
    skip += limit;
    loadProducts();
}

loadProducts();