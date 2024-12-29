async function getProduct(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const products_url = await fetch(`https://dummyjson.com/products`);
    const products = await products_url.json();
    console.log(products);

    const product = products.products[id - 1];
    const product_container = document.querySelector('.product-container'); 
    product_container.innerHTML = `
        <h1>${product.title}</h1>
    `;
    for (const image of product.images){

        product_container.innerHTML += `<img src="${image}" alt="${product.title}"/ style="width: 200px;">`
    }
    product_container.innerHTML+=`
        <p>Brand: ${product.brand}</p>
        <p>Category: ${product.category}</p>
        <p>${product.description}</p>
        <p>Price: ${product.price}$</p>
        <p>Rating: ${product.rating}</p>
        <p>Discount: ${product.discountPercentage}%</p>`;
}

getProduct();