import {BsPersonSquare} from "react-icons/bs";
import {ImAddressBook} from "react-icons/im";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {RiEditCircleFill, RiChatHeartFill} from "react-icons/ri";
import MyAccount from "./my-account";
import Orders from "./orders";
import ProductReview from "./product-review";
import NewsLetter from "./newsLetter";
import AddressBookComp from "./addressbookcomp";

export const sideBarData = [
    {
        icon:<BsPersonSquare/>,
        title: "My Account",
        name: <MyAccount/>,
    },
    {
        icon:<RiEditCircleFill/>,
        title: "My Orders",
        name: <Orders/>
    },
    {
        icon:<ImAddressBook/>,
        title: "Address Book",
        name: <AddressBookComp/>
    },
    {
        icon: <RiChatHeartFill/>,
        title: "My Product Reviews",
        name: <ProductReview/>
    },
    {
        icon:<FaEnvelopeOpenText/>,
        title: "Newsletter Subscriptions",
        name: <NewsLetter/>,
    },
];
