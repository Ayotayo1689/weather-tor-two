import React from "react";
import {Box, Button, Container, Flex, Grid,  Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs"
import Head from "next/head";
import Image from 'next/image'
import MainHeading from "../landingPage/heading";
import arrow from "../../../public/assets/cart/arrow.svg"
import {cartItems} from "./data";
import  cartItem from "../../../public/assets/cart/cartitem.svg"
import Summary from "./summary";
import CartItems from "./cart";

function Cart() {
    return (
        <>

            <Head>
                <title> About Us - Weatherfor2</title>
                <meta
                    name="description"
                    content="Discover exquisite interior decors and homely accessories at Weatherfor2.
                     Our curated collection blends style, functionality, and innovation to transform
                     spaces into captivating havens. Join us in creating harmonious living environments that
                     inspire conversations. Welcome to Weatherfor2, where timeless elegance awaits."
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;700;900&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <MainHeading />
            <Box  fontFamily={"'Urbanist', sans-serif"}>
              <Box mb={"30px"} fontSize={"22px "} borderBottom={"2px solid #A7016E"} p={"20px 0 10px 5%"} >Home > Shopping Cart</Box>
                <Box w={"90%"}  m={"30px auto"}>
                    <Button bg={"none"} color={"#DB0090"} border={"1px solid #DB0090"} borderRadius={"8px"}><Image src={arrow} alt={"arrow"}/>Return to Shopping</Button>

                   {/*<Summary/>*/}
                    <CartItems/>
                </Box>
            </Box>
        </>
    )
}

export default Cart