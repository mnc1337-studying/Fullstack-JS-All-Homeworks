const products = [
    { id: 1, title: 'Механічна клавіатура Keychron K2', category: 'keyboards', price: 3899, discount: 15, inStock: true, rating: 4.8, image: 'https://picsum.photos/seed/k2/300/200', tags: ['bluetooth', 'hot-swap'] },
    { id: 2, title: 'Миша Logitech MX Master 3S', category: 'mice', price: 4299, discount: null, inStock: true, rating: 4.9, image: 'https://picsum.photos/seed/mx/300/200', tags: ['wireless'] },
    { id: 3, title: 'Монітор Dell U2723QE', category: 'monitors', price: 24999, discount: 10, inStock: false, rating: 4.7, image: 'https://picsum.photos/seed/dell/300/200', tags: ['4k', 'usb-c', 'ips'] },
    { id: 4, title: 'Навушники Sony WH-1000XM5', category: 'audio', price: 13499, discount: null, inStock: true, rating: 4.6, image: null, tags: [] },
    { id: 5, title: 'Вебкамера Logitech C920', category: 'video', price: 2799, discount: 5, inStock: false, rating: 4.3, image: 'https://picsum.photos/seed/c920/300/200', tags: ['full-hd'] },
    { id: 6, title: 'Килимок для миші XXL', category: 'mice', price: 599, discount: null, inStock: true, rating: 3.9, image: null, tags: ['xxl'] },
];

const createProductCard = (product) => {
    const ul = document.querySelector("#catalog");
    const classNameBase = "product";
    const li = `
    <li class="${classNameBase}">
        <article class="${classNameBase}__card">
            <img src="${product.image}" alt="${product.name} image" class="${classNameBase}__image"></img>
            <h4 class="${classNameBase}__name">${product.title}</h4>
            <p class="${classNameBase}__category">Категорія: ${product.category}</p>
            <span class=${classNameBase}__price>Ціна: ${product.price} грн</span>
            <ul>
                ${(function() {
                    const tags = [];
                    for (const tag of product.tags) {
                        `<li>${tag}</li>`;
                    }
                    return tags.map(e => e).join(" ");
                })()}
            </ul>
            <span>${product.inStock ? "Товар доступний" : "Товар недоступний"}</span>
        </article>
    </li>`;

    const result = ul.insertAdjacentHTML("beforeend", li);
    return result;
};

for (const product of products) {
    console.log(createProductCard(product));
}