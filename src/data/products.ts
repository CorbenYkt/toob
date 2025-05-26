const BASE_PATH = import.meta.env.BASE_URL || "/";

const products = {
    "Flower TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-1.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_14AfZj2HY2O0ci62Gx0Ba07",
    },
    "Dog TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-2.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_4gM6oJaaq74gdmagxn0Ba08",
    },
    "Bike TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-3.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_dRm5kFciycoAbe2dlb0Ba09",
    },
    "Dino TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-4.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_3cIdRbciy0FS1Dsa8Z0Ba0a",
    },
    "Animal TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-5.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_6oU28t2HYbkw3LA3KB0Ba0b",
    },
    "Donut TOOB": {
        images: [`${BASE_PATH}img/goods/1/type-6.jpg`, `${BASE_PATH}img/goods/1/type-6-2.jpg`, `${BASE_PATH}img/goods/1/type-6-7.jpg`, `${BASE_PATH}img/goods/1/type-6-8.jpg`],
        price: 130,
        URL: "https://buy.stripe.com/test_eVq8wRdmC2O04PE5SJ0Ba0c",
    },
};

export default products;
