import React from "react";
import Login from "../../components/login_signUp";
import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import VerifyUser from "../../components/authenticationPages/verifyUser";
const VerifyUserPage = () => {
    return(
        <>
            <Head>
                <title>Login to your account</title>
                <meta
                    name="description"
                    content="login to weatherfor2 account "/>

            </Head>
            <Container display={{base:"flex",md:"block"}} justifyContent={"center"} alignItems={"center"}  h={{base:"100vh",md:"100%"}} maxWidth={"8xl"}>
                <Box  >
                    <VerifyUser/>
                </Box>

            </Container>
        </>
    )
};
export default VerifyUserPage;