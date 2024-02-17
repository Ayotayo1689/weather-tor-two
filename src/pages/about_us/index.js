import React from "react";
import LandingLayout from "../../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import AboutUs from "../../components/aboutUs";

function AboutUsPage() {
    return (
        <>
            <Box minHeight={"100vh"} >
                <AboutUs />
            </Box>
        </>
    );
}

AboutUsPage.getLayout = (page) => {
    return <LandingLayout>{page} </LandingLayout>;
};

export default AboutUsPage;