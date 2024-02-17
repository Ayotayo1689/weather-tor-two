import {
    bank,
    bedding,
    curtain,
    furniture,
    gift,
    matress,
    pillow,
    shirt,
    vector
} from "../../../public/assets/landingPage";
import {productA, productB, productC, productD} from "../../../public/assets/furniturePage";

export const offers = [
    {
        img: vector,
        title: 'FREE DELIVERY',
        text: 'On order over ₦500k ',
    },
    {
        img: bank,
        title: 'ORDER PROTECTION',
        text: 'On order over ₦500k ',
    },
    {
        img: shirt,
        title: '14 DAYS RETURN',
        text: 'On order over ₦500k ',
    },
    {
        img: gift,
        title: 'FREE GIFTS',
        text: 'On order over ₦500k ',
    }
];

export const mainCategories = [
    {
        img: furniture,
        title: 'Furniture'
    },
    {
        img: bedding,
        title: 'Bedding & Pillows',
    },
    {

        img: matress,
        title: 'Mattresses',
    },
    {
        img: curtain,
        title: 'Curtains & Blind'
    },
    {
        img: pillow,
        title: 'Towels'
    }
];

export const landingProducts = [
    {
        id:1,
        description:"Blue, double sided",
        img: furniture,
        reviews: 2,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:2,
        description:"Blue, double sided",
        img: bedding,
        reviews: 0,
        name: 'Wooden Canister',
        price: 120000.00,
    },
    {
        id:3,
        description:"Blue, double sided",
        img: matress,
        reviews: 1,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:4,
        description:"Blue, double sided",
        img: curtain,
        reviews: 0,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:5,
        description:"Blue, double sided",
        img: pillow,
        reviews: 3,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:6,
        description:"Blue, double sided",
        img: matress,
        reviews: 0,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:7,
        description:"Blue, double sided",
        img: curtain,
        reviews: 3,
        name: 'Wooden Canister',
        price: 80000.00,
    },
    {
        id:8,
        description:"Blue, double sided",
        img: pillow,
        reviews: 3,
        name: 'Wooden Canister',
        price: 80000.00,
    },
];


export const deals = [
    {
        id:9,
        img: productA,
        description:"Blue, double sided",
        reviews: 2,
        name: 'Sliding Curtains',
        price: 80000.00,
        discount: 180000.00,
        available: 40,
        sold: 20,
        text: 'Get this German Wooden Canister for as low as ₦80, 000\n' +
            'Hurry while offer is valid'
    },
    {
        id:10,
        img: productB,
        description:"Blue, double sided",
        reviews: 0,
        name: 'Sofa Chair',
        price: 120000.00,
        discount: 200000.00,
        available: 35,
        sold: 40,
        text: 'Buy this Classy Bedframe, suitable for modern bedroom\n' +
            'setting, sleep in style!'
    },
];