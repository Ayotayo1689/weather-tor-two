import React from "react";
import {Box, Button, Divider, Flex, FormControl, FormLabel, Input, Switch, Text, useToast} from "@chakra-ui/react";
import Link from "next/link";
import {Field, Formik, Form} from "formik";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter, AiOutlineGoogle} from "react-icons/ai";
import {useRouter} from "next/router";
import userSlice, {loginUser, registerUser} from "../../features/user/userSlice";
import {useDispatch} from "react-redux";


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required("Required")
        .min(6, 'Password must be at least 6 characters long')
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&]/,
    //     'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    // ),
});

export const LoginForm = ({ setActiveTab}) => {

    const dispatch = useDispatch();



    let router = useRouter();


    const toast = useToast({
        position: "top",
    });
    const handleSignupLinkClick = () => {
        setActiveTab(1); // Set the active tab index to the signup tab
    };
    return(
        <Box >
            <Text opacity={"0.7"} py={"10px"}>Welcome back to a World of affordable comfort</Text>
            <Formik
                initialValues={{
                    email: '',
                    password:'',
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values, {setSubmitting, isLogin}) => {

                    try {

                        const response =     await    dispatch(loginUser(values))

                        if( response.meta.requestStatus === "fulfilled"){
                            await router.push("/");
                        }


                        setSubmitting(false);
                    } catch (error) {


                        setSubmitting(false);

                    }
                    isLogin();
                }}
            >
                {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                    <Form>
                        <Field name="email">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Email</FormLabel>
                                    <Input {...field}  type='text'
                                           onChange={(e) => setFieldValue('email', e.target.value)}
                                           onBlur={(e) => setFieldTouched('email', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.email && touched.email ? (
                                        <Box color={"red"}>{errors.email}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Field name="Password">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <FormLabel>Password</FormLabel>
                                    <Input {...field}  type='password'
                                           onChange={(e) => setFieldValue('password', e.target.value)}
                                           onBlur={(e) => setFieldTouched('password', true)}
                                           bg={"white"}
                                           mb={"1rem"}
                                    />
                                    {errors.password && touched.password ? (
                                        <Box color={"red"}>{errors.password}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Flex gap={"2"} alignItems={"center"}>
                            <Switch id='email-alerts' size='sm' colorScheme='pink'/>
                            <Text opacity={"0.7"} >Keep me signed in <span style={{color:"#FE83C6"}}>untick if you’re using a shared computer</span></Text>
                        </Flex>
                        <Button
                            mt={4}
                            bg={"#DB0090"}
                            color={"white"}
                            w={"100%"}
                            type='submit'
                        >
                            Login
                        </Button>
                        <Box opacity={"0.7"} textAlign={"center"} pt={"2rem"}>
                            <Text onClick={handleSignupLinkClick}>Don’t have an account? <span style={{color:"#FE83C6", cursor:'pointer'}} > Sign up instead</span></Text>
                            <Link href={"/forgot_password"} style={{display:"block", color:"#FE83C6"}}>Forgot Password?</Link>
                        </Box>
                    </Form>
                )}
            </Formik>
            <Box display="flex" alignItems="center" w={{base: "", md: "", lg: "70%"}} mx={"auto"}>
                <Divider flex="1" borderColor="gray.300"/>
                <Text px={4} color={"rgba(75, 70, 92, 1)"}>Or</Text>
                <Divider flex="1" borderColor="gray.300"/>
            </Box>
            <Flex justifyContent={"center"}  mt={"1rem"}>
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
        </Box>
    )
};