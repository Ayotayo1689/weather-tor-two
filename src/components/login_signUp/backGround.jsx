import React from "react";
import {Box, Image, Text} from "@chakra-ui/react";


const BackGroundImg = ({title, subTitle, img}) => {
    return(
        <Box position={"relative"}>
            <Box position={"absolute"}
                 top={"4rem"}
                 left={"3rem"}
                 fontWeight={"400"}
                 lineHeight={"40px"}
                 fontSize={"4xl"}>
                <Text>{title}</Text>
                <Text>{subTitle}</Text>
                <Box bg={"#A7016E"} height={"5px"} my={"10px"} w={"15rem"} borderRadius={"lg"} ml={"10rem"}></Box>
            </Box>
            <Box position={"relative"}>
                <Image
                    src={img} alt={"loginbg"}
                    overflow={"hidden"}
                    translate={"rotate(30.862deg)"}
                    z-index={"100"}/>
                <Box
                    position={"absolute"}
                    bottom={"0"}
                    right={"0"}
                    width={"65%"}>
                    <Image src={"/assets/authenticationPages/resetPassword/purple.png"} alt={"rect"}/>
                </Box>
            </Box>
        </Box>
    )
}
export default BackGroundImg;