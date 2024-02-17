import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";
import ResetPasswordSuccessful from "../../components/authenticationPages/resetPassword/resetPasswordSuccessful";

function ResetPasswordSuccessfulPage() {
    return (
        <>
            <Box minHeight={"100vh"} >
                <ResetPasswordSuccessful  />
            </Box>
        </>
    );
}
export default ResetPasswordSuccessfulPage;