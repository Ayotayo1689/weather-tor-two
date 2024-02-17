import React from "react"
import {Box, Flex, Text} from "@chakra-ui/react";
import {AiOutlineCheck} from "react-icons/ai"
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";


function ResetPasswordSuccessful() {
    return (
        <>
            <Head>
                <title> Reset Password Successful- Weatherfor2</title>
                <meta
                    name="description"
                    content="Congratulations! Your password reset has been successful.
                    You can now log in to your account using your updated password.
                    Thank you for choosing Weatherfor2, and we're here to assist you with
                     any further needs you may have."
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;700;900&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
            </Head>

            <Box height={"100%"} w={"100%"}>

                <Box
                    alignItems={"center"}
                    justifyContent={"center"}
                    mt={"8rem"}
                    display={{base: "flex", md: "flex", lg: "none"}}
                >
                    <Image src={"/assets/authenticationPages/resetPassword/logo.png"}
                           width={150}
                           height={100}
                           alt={"logo"}/>
                </Box>
                <Flex>

                    <Box w={{base: "100%", md: "100%", lg: "45%"}} mt={{base: "5rem", md: "5rem", lg: "15rem"}}>
                        <Text color={"rgba(52, 51, 48, 1)"}
                              fontSize={"2rem"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                             >
                            <AiOutlineCheck/>
                        </Text>

                        <Text color={"#343330"} fontSize={"29.313px"} textAlign={"center"}  fontFamily={"'Urbanist', sans-serif"}>
                            Password Reset
                        </Text>

                        <Link href="/"> <Text color={"#4B465C"} fontSize={"15px"}
                                              fontWeight={400} display={"flex"}
                                              alignItems={"center"}
                                              fontFamily={"'Public Sans', sans-serif"}
                                              justifyContent={"center"}> Continue to <Text as='span'
                                                                                           color={"rgba(254, 131, 198, 1)"}> &nbsp;Sign
                            in</Text>
                        </Text></Link>

                    </Box>

                    <Box position={"relative"}
                         height={"100vh"}
                         width={"60%"}
                         display={{base: "none", md: "none", lg: "flex"}}
                    >

                        <Image src={"/assets/authenticationPages/resetPassword/girl.svg"}
                               alt={"purple shape"}
                               height={100}
                               width={100}
                               style={{position: "absolute", width: "100%", height: "100vh", backgroundSize: "contain"}}
                        />

                        <Image src={"/assets/authenticationPages/resetPassword/purple.png"}
                               alt={"purple shape"}
                               height={200}
                               width={300}
                               style={{position: "absolute", bottom: "0", right: "0"}}
                        />
                    </Box>

                    <Box display={{base: "block", md: "flex", lg: "none"}}>
                        <Image src={"/assets/authenticationPages/resetPassword/mobileTowel.png"}
                               alt={"purple shape"}
                               height={300}
                               width={400}
                               style={{position: "absolute", bottom: "0", right: "0"}}
                        />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default ResetPasswordSuccessful






