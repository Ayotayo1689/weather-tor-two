import React, {useState} from "react";
import {Box, Flex, Grid, Heading, Text} from "@chakra-ui/react";

const MyAccount = () => {
        const [isEditMode, setIsEditMode] = useState(false);
        const [name, setName] = useState("Abbas Alabura");
        const [email, setEmail] = useState("abbasalabson@gmail.com");
        const [address, setAddress] = useState('You are subscribed to \"General Subscription\".')
        const handleEdit = () => {
            setIsEditMode(true);
        };

        const handleSave = () => {
            // Save the edited values to your data storage or perform any necessary actions
            setIsEditMode(false);
        };

        return (
        <Box>
            <Heading
                color='#000'
                fontSize={{base:"lg", lg:'2xl'}}
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                My Account
            </Heading>
            <Text opacity={"0.5"} fontSize={{base:"lg", lg:'2xl'}}>
                Account Information
            </Text>
            <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
            <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                <Box lineHeight={"30px"}>
                    <Text py={"1rem"} fontWeight={"bold"} fontSize={{base:"lg", lg:'2xl'}}>Confirm Information</Text>
                    {isEditMode ? (
                        <Grid>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                size="30"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="30"
                            />
                        </Grid>
                    ) : (
                        <>
                            <Text fontSize={"sm"}>{name}</Text>
                            <Text fontSize={"sm"}>{email}</Text>
                            <Flex gap={"3"}>
                                <button id="edit-button" style={{color:"#0D5292"}} onClick={handleEdit}>
                                    Edit
                                </button>
                                <Text fontSize={"sm"}>Change Password</Text>
                            </Flex>
                        </>
                    )}
                </Box>
                <Box lineHeight={"30px"} pr={"4rem"}>
                    <Text py={"1rem"} fontWeight={"bold"} fontSize={{base:"lg", lg:'2xl'}}>Newsletters</Text>
                    {isEditMode ? (
                        <>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                size="30"
                            />
                        </>
                    ) : (
                        <>
                            <Text fontSize={"sm"}>{address}</Text>
                            <Flex gap={"3"}>
                                <button id="edit-button" style={{color:"#0D5292"}} onClick={handleEdit}>Edit</button>
                                <Text fontSize={"sm"}>Change Password</Text>
                            </Flex>
                        </>
                    )}

                </Box>
            </Flex>
            <Box pt={"3rem"}>
                <Text opacity={"0.5"} fontSize={{base:"lg", lg:'2xl'}}>
                    Address Book
                </Text>
                <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
                <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                    <Box lineHeight={"30px"}>
                        <Text py={"1rem"} fontWeight={"bold"} fontSize={{base:"lg", lg:'2xl'}}>Default Billing Address</Text>
                        {isEditMode ? (
                            <>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    size="30"
                                />
                            </>
                        ) : (
                            <>
                                <Text fontSize={"sm"}>You have not set a default billing address.</Text>
                                <button id="edit-button" style={{color:"#0D5292"}} onClick={handleEdit}>Edit Address</button>
                            </>
                        )}
                    </Box>
                    <Box lineHeight={"30px"} pr={"4rem"}>
                        <Text py={"1rem"} fontWeight={"bold"} fontSize={{base:"lg", lg:'2xl'}}>Default Shipping Address</Text>
                        {isEditMode ? (
                            <Grid>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    size="30"
                                />
                                <button id="edit-button" style={{color:"#0D5292"}} onClick={handleSave}>
                                    Save
                                </button>
                            </Grid>
                        ) : (
                            <>
                                <Text fontSize={"sm"}>You have not set a default shipping address.</Text>
                                <button id="edit-button" style={{color:"#0D5292"}} onClick={handleEdit}>Edit</button>
                            </>
                        )}

                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default MyAccount;