import React from "react";
import Login from "../../components/login_signUp";
import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
const LoginPage = () => {
    return(
        <>
            <Head>
                <title>Login to your account</title>
                <meta
                name="description"
                content="login to weatherfor2 account "/>

            </Head>
        <Container maxWidth={"8xl"}>
            <Login/>
        </Container>
    </>
    )
};
export default LoginPage;