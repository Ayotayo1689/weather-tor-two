import {Box, Button, FormControl, Input, useToast} from "@chakra-ui/react";
import styled from "styled-components";
import * as Yup from "yup";
import axiosInstance from "../../utils/axios";
import {Field, Formik, Form} from "formik";
import React from "react";



const NewsLetterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

const Newsletter = () => {
    const toast = useToast();
    return (
        <Box
            bg={'#480130'}
            color={'#EEEDED'}
            width={'60%'}
            p={'2rem 4.5rem'} mt={'4rem'} >
            <Wrapper>
                <NewsletterText>
                    <h2>Newsletter Sign Up</h2>
                    <p>Dern and Classy bedding styles, curtains, window blinds, corporate wear, and interior decoration, that is sure to suit anyone's style and taste. While working within time and budget</p>
                </NewsletterText>
                {/* ======== newsletter buttons =====*/}
                <Formik
                    initialValues={{
                        email:'',
                    }}
                    validationSchema={NewsLetterSchema}
                    onSubmit={async (values, {setSubmitting, resetForm}) => {
                        try {
                            const  response = await axiosInstance.post("api/newsletter/", values);
                            toast({
                                title: "Thank you!",
                                description: "We will be in touch with you shortly",
                                status: "success",
                                duration: 5000,
                                isClosable: true,
                            });
                            setSubmitting(false);
                        } catch (error) {
                            setSubmitting(false);
                            const description = error && error.response && error.response.status === 400
                                ? "Newsletter with this email already exists."
                                : "There was an error submitting your response. Please try again.";
                            toast({
                                title: "An error occurred",
                                description,
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                        }
                        console.log(values);
                        resetForm();
                    }}>
                    {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                <Box w={'50%'}>
                    <Form>
                        <Field name="email">
                            {({field}) => (
                        <FormControl>
                            <Input
                                {...field}
                                type='email'
                                placeholder={'Enter your email'}
                                focus={'none'}
                                p={'1rem 1.5rem'}
                                mb={'1rem'}
                                onChange={(e) => setFieldValue('email', e.target.value)}
                                onBlur={(e) => setFieldTouched('email', true)}
                                color={'#EEEDED'} w={'100%'}/>
                            {errors.email && touched.email ? (
                                <Box color={"red"}>{errors.email}</Box>
                            ) : null}
                        </FormControl>
                            )}
                        </Field>
                            <Button
                                type="submit"
                                bg={'#DB0090'}
                                w={'100%'}
                                p={'1rem 1.5rem'}
                                _hover={{
                                    color: '#480130'
                                }}
                                color={'#EEEDED'}>Subscribe Now
                            </Button>
                    </Form>
                </Box>
                    )}
                </Formik>
            </Wrapper>
        </Box>
    );
};

export default Newsletter;

const NewsletterText = styled.div`
  width: 50%;
  text-align: start;
  margin-right: 20px;
  
  h2 {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    text-align: start;
    font-size: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
    
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
