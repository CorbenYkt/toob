const BASE_PATH = import.meta.env.BASE_URL || "/";

const products = {
    "Flower TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-1.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/dRm28rabH67W04d85l4ko06",
    },
    "Dog TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-2.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/eVq9AT1Fb9k83gpdpF4ko05",
    },
    "Bike TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-3.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/5kQ7sL1Fb2VK2cl99p4ko04",
    },
    "Dino TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-4.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/3cI7sLdnTdAocQZ3P54ko03",
    },
    "Animal TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-5.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/3cI4gz3Nj3ZO04dadt4ko02",
    },
    "Donut TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-6.jpg`, `${BASE_PATH}img/goods/1/type-6-2.jpg`, `${BASE_PATH}img/goods/1/type-6-7.jpg`, `${BASE_PATH}img/goods/1/type-6-8.jpg`],
        price: 160,
        URL: "https://buy.stripe.com/4gM5kD97D3ZOeZ70CT4ko01",
    },
};

export default products;
