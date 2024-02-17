import React from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Text,
    InputGroup,
    InputLeftElement, Stack, FormErrorMessage
} from "@chakra-ui/react";
import Link from "next/link";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import {FaFacebookF, FaLock} from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import {loginUser, registerUser} from "../../features/user/userSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";





const validationSchema = Yup.object().shape({
    phone_number: Yup.string().required('Phone number is required'),
    full_name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/,
            'Password must be at least 8 characters long and contain at least one letter and one number'
        )
        .required('Password is required!'),
});




export const SignUpForm = ({ activeTab, setActiveTab }) => {

    let router = useRouter();



    const toast = useToast({
        position: "top",
    });

    const dispatch = useDispatch();

    const handleLoginLinkClick = () => {
        setActiveTab(0); // Set the active tab index to the signup tab
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {




        try {

            const response =     await    dispatch(registerUser(values))

            if( response.meta.requestStatus === "fulfilled"){
                    router.push("/verify_account");
            }

        } catch (error) {
            console.error(error);
            setSubmitting(false);
        }
        // resetForm();
    };

    return (
        <Box>
            <Text opacity={"0.7"} py={"10px"}>Welcome back to a World of affordable  comfort</Text>



            <Formik
                initialValues={{
                    full_name: '',
                    phone_number: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                <Form>


                        <Field name="full_name">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.full_name && form.touched.full_name}>
                                    <FormLabel htmlFor="full_name" color={'gray.500'}>Full Name</FormLabel>
                                    <InputGroup>
                                        {/*<InputLeftElement pointerEvents="none"*/}
                                        {/*                  children={<FaUser color="gray.300"/>}/>*/}
                                    <Input bg={"white"} mb={"1rem"} {...field} id="full_name" placeholder="Enter your fill name"/>
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.full_name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>



                    <Field name="phone_number">
                        {({field, form}) => (
                            <FormControl isInvalid={form.errors.phone_number && form.touched.phone_number}>
                                <FormLabel htmlFor="phone_number" color={'gray.500'}>Phone Number</FormLabel>
                                <InputGroup>
                                    {/*<InputLeftElement pointerEvents="none"*/}
                                    {/*                  children={<FaUser color="gray.300"/>}/>*/}
                                    <Input bg={"white"} mb={"1rem"}  {...field} id="phone_number" placeholder="Enter your phone "/>
                                </InputGroup>
                                <FormErrorMessage>{form.errors.phone_number}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>



                        <Field name="email">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel htmlFor="email" color={'gray.500'}>Email Address</FormLabel>
                                    <InputGroup>
                                        {/*<InputLeftElement pointerEvents="none"*/}
                                        {/*                  children={<FaUser color="gray.300"/>}/>*/}
                                        <Input bg={"white"} mb={"1rem"}  {...field} id="email" placeholder="Enter your email address"/>
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>





                        <Field name="password">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel htmlFor="password" color={'gray.500'}>Choose Password</FormLabel>
                                    <InputGroup>
                                        {/*<InputLeftElement pointerEvents="none"*/}
                                        {/*                  children={<FaLock color="gray.300"/>}/>*/}
                                        <Input bg={"white"} mb={"1rem"}
                                               {...field}
                                            id="password"
                                            type="password"
                                            placeholder="Choose a password"
                                            focusBorderColor="red.200"
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>





            <Button
                mt={4}
                bg={"#DB0090"}
                color={"white"}
                w={"100%"}
             type="submit"
            >
                Sign up
            </Button>

            <Box opacity={"0.7"} py={"15px"} textAlign={"center"}>
                <Text onClick={handleLoginLinkClick}>Already have an account? <span style={{ color:"#FE83C6"}}>Log in instead</span></Text>
            </Box>
            <Box display="flex" alignItems="center" w={{base: "", md: "", lg: "70%"}} mx={"auto"}>
                <Divider flex="1" borderColor="gray.300"/>
                <Text px={4} color={"rgba(75, 70, 92, 1)"}>Or</Text>
                <Divider flex="1" borderColor="gray.300"/>
            </Box>
            <Flex justifyContent={"center"} mt={"1rem"}>
                <Box mr={"1rem"} bg={"rgba(66, 103, 178, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <FaFacebookF color={"rgba(66, 103, 178, 1)"} fontSize={"1.3rem"}/>
                </Box>
                <Box mr={"1rem"} bg={"rgba(29, 161, 242, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <AiOutlineTwitter color={"rgba(29, 161, 242, 1)"} fontSize={"1.3rem"}/>
                </Box>
                <Box mr={"1rem"} bg={"rgba(219, 68, 55, 0.16)"} width={"38px"} height={"38px"}
                     p={"1rem 2rem 2em 1rem"} borderRadius={"5px"}>
                    <AiOutlineGoogle color={"#DB4437"} fontSize={"1.3rem"}/>
                </Box>

            </Flex>



                </Form>
            </Formik>


        </Box>
    );
};
