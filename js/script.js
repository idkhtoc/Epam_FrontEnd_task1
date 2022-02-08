window.addEventListener('DOMContentLoaded', () => {
    
    const setCards  = function (data) {
        data.forEach(({name, price, imgPath, imgAlt}) => {
            const element = document.createElement('div');
            
            element.innerHTML = `
                <img src="${imgPath}" alt="${imgAlt}" class="main__card-img">

                <a href="#" class="main__card-name">${name}</a>

                <div class="main__card-buy">
                    <button class="main__card-button">Add to Cart</button>
                    <p class="main__card-price">$${price}</p>
                </div>
            `;
            
            element.classList.add('main__card');

            document.querySelector('.main__cards-wrapper').append(element);
        });
    };

    axios.get("http://localhost:3000/products")
        .then(data => setCards(data.data))
        .catch();
});