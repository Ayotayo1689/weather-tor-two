import React from "react";
import {Container} from "@chakra-ui/react";
import Head from "next/head";
import ContactUs from "../../components/contactUs";
import LandingLayout from "../../layouts/landing.layout";

const ContactUsPage = () => {
    return(
        <>
            <Head>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="Contact us for more information "/>

            </Head>
            <Container maxWidth={"8xl"}>
                <ContactUs/>
            </Container>
        </>
    )
};
ContactUsPage.getLayout = (page) => {
    return <LandingLayout>{page}</LandingLayout>;
};
export default ContactUsPage;