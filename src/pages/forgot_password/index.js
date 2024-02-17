import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import ForgotPassword from "../../components/authenticationPages/resetPassword/forgot_password";

function ForgotPasswordPage() {
    return (
        <>
            <Box minHeight={"100vh"} >
                <ForgotPassword />
            </Box>
        </>
    );
}

export default ForgotPasswordPage;