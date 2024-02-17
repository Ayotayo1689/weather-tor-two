import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import ResetPasswordss from "../../components/authenticationPages/resetPassword/resetPasswordss";
import Cart from "../../components/cart";
import AboutUsPage from "../about_us";

function ShoppingCart() {
    return (
        <>
            <Box minHeight={"100vh"} >
                <Cart />
            </Box>
        </>
    );
}
ShoppingCart.getLayout = (page) => {
    return <LandingLayout>{page} </LandingLayout>;
};

export default ShoppingCart;