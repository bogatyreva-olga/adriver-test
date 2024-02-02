let goods = [
    {
        'id': 1,
        'image': 'image/1.jpg',
        'title': 'Жакет на пуговицах',
        'price': 11980
    },
    {
        'id': 2,
        'image': 'image/2.jpg',
        'title': 'Футболка базовая',
        'price': 2980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
];

function showLogo() {
    let content = document.querySelector(".banner__wrap");
    let startElement = document.querySelector(".banner__logo-start");
    setTimeout(() => {
        startElement.style.display = "none"
    }, 3000 );
    setTimeout(() => {
        content.classList.remove("hidden")
    }, 3500 );
}

function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

document.addEventListener("DOMContentLoaded", function () {
    const createCardElement = (item) => {

        const cardTemplateElement = document.querySelector("#card").content;
        const cardElement = cardTemplateElement.cloneNode(true);
        cardElement.querySelector(".card__images div").innerHTML = "";
        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        cardElement.querySelector(".card__images div").appendChild(img);
        cardElement.querySelector(".price span").innerText = numberWithSpace(item.price);
        cardElement.querySelector(".card__text").textContent = item.title;
        let bannerContents = document.querySelector(".banner__content");
        bannerContents.appendChild(cardElement);
        return bannerContents;
    }
    for (let i = 0; i < goods.length; i++) {
        createCardElement(goods[i]);
    }
    showLogo();
})
