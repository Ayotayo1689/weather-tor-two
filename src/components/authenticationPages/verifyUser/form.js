import React, {useRef, useEffect, useState} from "react";
import { Field, Form, Formik } from "formik";
import {Box, Button, Flex, Text, useToast} from "@chakra-ui/react";
import {registerUser, verifyUser} from "../../../features/user/userSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

function VerifyUserForm({ numberOfDigits }) {

    let router = useRouter();


    const dispatch = useDispatch();

    const [email, setEmail] = useState("")

    const inputRefs = useRef([]);

    const focusNextInput = (index) => {
        if (index < numberOfDigits - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const focusPreviousInput = (index) => {
        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };



    const handleSubmit = async (values) => {
        const otpValue = values.otp.join("");
        try {
            const data = {
                email: email, // Get the email from the form values
                otp: otpValue,
            };
            // Assuming verifyUser is an async function (based on the use of 'await')
            await dispatch(verifyUser(data))
            setTimeout(() => {

                router.push("/login");
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    };



    const toast = useToast({
        position: "top",
    });


    useEffect(() => {
      const emailValue =  localStorage.getItem("userEmail")
if(emailValue){
    setEmail(emailValue)
}

    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <Formik
            initialValues={{
                otp: Array(numberOfDigits).fill(""),
                email: email, // Add the email field to the form's initial values
            }}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, setFieldValue }) => (
                <Form>
                    <Box w={"100%"} m={{ base: "0 auto", md: "0 60px" }}>
                        <Text
                            color={"rgba(75, 70, 92, 1)"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            mt={"1rem"}
                            fontFamily={"'Public Sans', sans-serif"}
                        >
                            6 digits Code
                        </Text>
                        <Flex>
                            {values.otp.map((digit, index) => (
                                <Field
                                    key={index}
                                    name={`otp[${index}]`}
                                    type="text"
                                    value={digit}
                                    maxLength="1"
                                    inputMode="numeric" // Accept only numeric input
                                    onInput={(e) => {
                                        // Enforce maximum length of 1 character
                                        e.target.value = e.target.value.slice(0, 1);
                                        handleChange(e);
                                        if (e.target.value !== "") {
                                            focusNextInput(index);
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Backspace" && values.otp[index] === "") {
                                            focusPreviousInput(index);
                                        }
                                    }}
                                    innerRef={(ref) => (inputRefs.current[index] = ref)}
                                    style={{
                                        border: "0.5px solid #c5c9c6",
                                        maxWidth: "40px",
                                        minWidth: "20px",
                                        height: "40px",
                                        fontSize: "20px",
                                        textAlign: "center",
                                        marginRight: "10px",
                                        borderRadius: "6px",
                                    }}
                                />
                            ))}
                        </Flex>
                        <Text
                            color={"#c5c9c6"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            mt={"0.5rem"}
                            fontFamily={"'Public Sans', sans-serif"}
                        >
                            The OTP is valid for 5 minutes
                        </Text>
                        {/* Add a hidden input field to store the email */}
                        <Field name="email" type="hidden" />

                    </Box>
                    <Button
                        type="submit"
                        mt="1rem"
                        width={{ base: "90%", md: "80%", lg: "70%" }}
                        ml={{ base: "1rem", md: "3rem", lg: "4rem" }}
                        height="2.375rem"
                        bg="rgba(219, 0, 144, 1)"
                        letterSpacing="1px"
                        fontFamily="'Public Sans', sans-serif"
                        color="white"
                    >
                        Verify
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default VerifyUserForm;
