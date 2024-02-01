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
        'title': 'Футболка базовая Футболка базовая Футболка',
        'price': 2980
    },
    {
        'id': 3,
        'image': 'image/3.jpg',
        'title': 'Тренч двубортный с погонами',
        'price': 24980
    },
];

function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, " ");
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
        console.log( numberWithSpace(item.price))
        cardElement.querySelector(".card__text").textContent = item.title;
        let bannerContents = document.querySelector(".banner__content");
        bannerContents.appendChild(cardElement);
        return bannerContents;
    }
    for (let i = 0; i < goods.length; i++) {
        createCardElement(goods[i]);
    }
})
