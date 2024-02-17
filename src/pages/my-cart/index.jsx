import React from "react";
import MyCart from "../../components/my-cart";
import LandingLayout from "../../layouts/landing.layout";
import Head from "next/head";
import {Container} from "@chakra-ui/react";

const MyCartPage = () => {
    return(
        <>
            <Head>
                <title>My Cart | Weather For 2 </title>
                <meta
                    name="description"
                    content="Discover Tanta's expert IT consulting and innovative software
                development services, tailored to elevate your business and drive digital transformation."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="tanta innovative, Tanta, Tanta Innovative Limited, Mobile app, IT consulting, Software development,
            Custom software, Digital transformation, Cloud computing, Cybersecurity, Data analytics, Business intelligence,
          Project management, Web development, Mobile app development, UI/UX design, E-commerce, Enterprise solutions,
          IT support, Outsourcing, IT consulting services"
                />
                <meta name="author" content="Tanta Innovative Limited" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
                <MyCart/>

        </>
    )
}
MyCartPage.getLayout = (page) => {
    return <LandingLayout>{page}</LandingLayout>;
};
export default MyCartPage;