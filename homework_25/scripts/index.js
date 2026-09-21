import { products } from "./data.js";


const defaultImage = "https://placehold.co/300x200?text=No+Image";


function createProductCard(product) {
    const classNameBase = "product";
    const li = document.createElement("li");
    li.className = `${classNameBase}`;

    let tagsHTML = "";
    if (product.tags.length > 0) {
        for (const tag of product.tags) {
            tagsHTML += `<li class="${classNameBase}__tag">${tag}</li>`;
        }
    } else {
        tagsHTML = `<li class="${classNameBase}__tag">Без тегів</li>`;
    }

    const imageSrc = product.image ? product.image : defaultImage;
    const statusText = product.inStock ? "В наявності" : "Немає в наявності";

    li.innerHTML = `
        <img src="${imageSrc}" alt="${product.title}" class="${classNameBase}__image">
        <h4 class="${classNameBase}__title">${product.title}</h4>
        <p class="${classNameBase}__category"><span class="${classNameBase}__description">Категорія:<span class="${classNameBase}__description"> ${product.category}</p>
        <p class="${classNameBase}__price"><span class="${classNameBase}__description">Ціна:<span class="${classNameBase}__description"> ${product.price} грн</p>
        <p class="${classNameBase}__rating"><span class="${classNameBase}__description">Рейтинг:<span class="${classNameBase}__description"> ${product.rating}</p>
        <p class="${classNameBase}__description">Теги:</p>
        <ul class="${classNameBase}__tags">${tagsHTML}</ul>
        <span class="${classNameBase}__status"><span class="${classNameBase}__description">${statusText}<span class="${classNameBase}__description"></span>
    `;

    return li;
}


const ul = document.querySelector("#products");


if (ul) {
    for (const product of products) {
        const liElement = createProductCard(product);
        ul.appendChild(liElement);
    }
} else {
    alert("Списку з таким ідентифікатором чи класом не знайдено.");
    console.error("Списку з таким ідентифікатором чи класом не знайдено.");
}