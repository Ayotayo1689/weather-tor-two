import React from "react";
import {Field, Form, Formik} from "formik";
import axiosInstance from "../../../../utils/axios";
import {Box, Button, Checkbox, FormControl, Input, Text} from "@chakra-ui/react";
import * as Yup from "yup";
import Link from "next/link";



const ResetPasswordFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    new_password: Yup.string()
        .required("Required")
        .min(6, 'Password must be at least 6 characters long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d@$!%*?&]/,
            'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
        ),
    repeat_password: Yup.string()
        .oneOf([Yup.ref(" new_password"), null], "Passwords must match")
        .required("Repeat Password is required")
});

function ResetPasswordForm() {

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    new_password: "",
                    repeat_password: "",

                }}
                validationSchema={ResetPasswordFormSchema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {


                    try {
                        const response = await axiosInstance.post("/auth/change-password/", values);
                        toast({
                            title: "Thank you!",
                            description: "We will be in touch with you shortly",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });
                        setSubmitting(false);
                    } catch (error) {
                        console.error(error);
                        setSubmitting(false);

                        toast({
                            title: "An error occurred",
                            description:
                                "There was an error submitting your response. Please try again.",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                    console.log(values);
                    resetForm();
                }}
            >
                {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                    <Form>

                        <Field name="email" >
                            {({field}) => (

                                <FormControl mb={"1rem"} mt={"1rem"} w={{base: "90%", md: "80%", lg: "70%"}}
                                             ml={{base: "1rem", md: "3rem", lg: "4rem"}}>
                                    <Text color={"#808587"} fontSize={"15px"}
                                          fontWeight={"400"} fontFamily={"'Public Sans', sans-serif"}>Email</Text>
                                    <Input {...field} id="email" placeholder="john.doe@gmail.com"
                                           onChange={(e) => setFieldValue('email', e.target.value)}
                                           onBlur={(e) => setFieldTouched('email', true)}
                                           bg={"rgba(255, 255, 255, 1)"}
                                    />
                                    <Text color={"#808587"} fontSize={"15px"}
                                          fontWeight={"400"}>Use your registered email address</Text>


                                    {errors.email && touched.email ? (
                                        <Box color={"red"}>{errors.email}</Box>
                                    ) : null}

                                </FormControl>
                            )}
                        </Field>


                        <Field name="new_password" >
                            {({field}) => (
                                <FormControl mb={"1rem"} mt={"1rem"} w={{base: "90%", md: "80%", lg: "70%"}}
                                             ml={{base: "1rem", md: "3rem", lg: "4rem"}}>
                                    <Text color={"#808587"} fontSize={"13px"} fontWeight={"400"} fontFamily={"'Public Sans', sans-serif"}> New
                                        Password</Text>
                                    <Input {...field} id="new_password" placeholder="**********"
                                           onChange={(e) => setFieldValue('new_password', e.target.value)}
                                           onBlur={(e) => setFieldTouched('new_password', true)}
                                           bg={"rgba(255, 255, 255, 1)"}/>
                                    {errors.new_password && touched.new_password ? (
                                        <Box color={"red"}>{errors.new_password}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>


                        <Field name="repeat_password">
                            {({field}) => (
                                <FormControl mb={"1rem"} mt={"1rem"} w={{base: "90%", md: "80%", lg: "70%"}}
                                             ml={{base: "1rem", md: "3rem", lg: "4rem"}}>
                                    <Text color={"#808587"} fontSize={"13px"} fontWeight={"400"} fontFamily={"'Public Sans', sans-serif"}>Repeat
                                        Password</Text>
                                    <Input {...field} id="repeat_password" placeholder="**********"
                                           onChange={(e) => setFieldValue('repeat_password', e.target.value)}
                                           onBlur={(e) => setFieldTouched('repeat_password', true)}
                                           bg={"rgba(255, 255, 255, 1)"}/>
                                    {errors.repeat_password && touched.repeat_password ? (
                                        <Box color={"red"}>{errors.repeat_password}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>

                        <Checkbox color={"rgba(75, 70, 92, 1)"} borderRadius={"md"} size='lg'
                                  pl={{base: "0rem", md: "0rem", lg: "0rem"}}
                                  ml={{base: "1rem", md: "3rem", lg: "4rem"}}>

                            <Text color={" rgba(75, 70, 92, 1)"} fontSize={"15px"} fontWeight={"400"} fontFamily={"'Public Sans', sans-serif"}>
                                I agree to <Link href="/"> <Text as="span" color="rgba(254, 131, 198, 1)" > privacy policy &
                                terms</Text></Link>
                            </Text> </Checkbox>

                        <Button type={"submit"} mt={"1rem"}
                                width={{base: "90%", md: "80%", lg: "70%"}}
                                ml={{base: "1rem", md: "3rem", lg: "4rem"}}
                                height={"2.375rem"}
                                bg={"rgba(219, 0, 144, 1)"}
                                letterSpacing={"1px"}
                                fontFamily={"'Public Sans', sans-serif"}
                                color={"white"}>Change Password</Button>
                    </Form>
                )}
            </Formik>


        </>
    )
}

export default ResetPasswordForm