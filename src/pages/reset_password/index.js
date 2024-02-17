import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import ResetPasswordss from "../../components/authenticationPages/resetPassword/resetPasswordss";

function ResetPasswordPage() {
    return (
        <>
            <Box minHeight={"100vh"} >
                <ResetPasswordss />
            </Box>
        </>
    );
}

export default ResetPasswordPage;