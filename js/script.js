window.addEventListener('DOMContentLoaded', () => {
    // Products behavior
    
    const setCards = function (data) {
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

    const smthGoWrong = function () {
        const element = document.createElement('div');

        element.innerHTML = '<p> Sorry, but smth went wrong( </p>';
        element.classList.add('main__wrong-text');

        document.querySelector('.main__container').append(element);
    };

    axios.get('http://localhost:3000/products')
        .then(data => setCards(data.data))
        .catch(() => smthGoWrong());

    // Cart
    
    const modal = document.querySelector('.modal'),
          cartEntry = document.querySelector('.header__cart'),
          productsWrapper = document.querySelector('.main__cards-wrapper');

    const toggleModal = function () {
        modal.classList.toggle('show');
        document.body.style.overflow = (modal.classList.contains('show')) ? 'hidden' : '';
    };

    cartEntry.addEventListener('click', () => toggleModal());

    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.getAttribute('data-close-modal') == '') {
            toggleModal();
        }
    });

    document.addEventListener('keydown', key => {
        if (key.code == 'Escape' && modal.classList.contains('show')) {
            toggleModal();
        }
    });
});