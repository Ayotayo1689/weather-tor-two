import React from "react";
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Text,
    Select, Flex, Heading,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import {FaUser} from "react-icons/fa";

const AddressBookComp = () => {

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log("hello")
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('Full Name is required'),
        country: Yup.string().required('Country is required'),
        phone: Yup.string().required('Phone number is required'),
        street_address: Yup.string().required('Street_address is required'),
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City/Town is required'),
        last_name: Yup.string().required('Last Name is required'),
        post_code: Yup.string().required('Post code is required'),

    });

    return (
        <Box  w={{ base: "100%", lg: "70%" }}  mb={"50px"}>
            <Heading
                color='#000'
                fontSize='2xl'
                fontWeight='400'
                textTransform={'uppercase'}
                lineHeight='normal'
                mb={'2.5rem'}>
                Address Book
            </Heading>
            <Text opacity={"0.8"} fontSize={"20px"}>
                Add New Address
            </Text>
            <Box w={"full"} borderBottom={"2px solid #D9D9D9"} pt={"1rem"}></Box>
                <Formik
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        phone: '',
                        company: '',
                        street_address:'',
                        country:'',
                        state:'',
                        city:'',
                        post_code:'',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Form >
                        <Stack spacing={9} m={{base:"0 auto",md:" 15px 0"}} maxW={{base:"360px",md:"800px"}}  direction={{base: 'column', md: 'row'}}>
                            <Field name="first_name">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.first_name && form.touched.first_name}>
                                        <FormLabel fontSize={"20px"} htmlFor="first_name" color={'black'}>First Name</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaUser color="gray.200"/>}/>*/}
                                            <Input {...field} id="first_name" placeholder="Enter your first name"/>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="last_name">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.last_name && form.touched.last_name}>
                                        <FormLabel fontSize={"20px"} htmlFor="last_name" color={'black'}>Last Name</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaUser color="gray.300"/>}/>*/}
                                            <Input {...field} id="last_name" placeholder="Enter your last name"/>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>
                        <Stack m={{base:"0 auto",md:" 15px 0"}} maxW={{base:"360px",md:"800px"}}   spacing={9}  mb={6} direction={{base: 'column', md: 'row'}}>
                            <Field name="company">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.company && form.touched.company}>
                                        <FormLabel fontSize={"20px"} htmlFor="company" color={'black'}>Company</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaLock color="gray.300"/>}/>*/}
                                            <Input
                                                {...field}
                                                id="company"
                                                type="text"
                                                // focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage maxW={"350px"} >{form.errors.company}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="phone">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.phone && form.touched.phone}
                                    >
                                        <FormLabel fontSize={"20px"} htmlFor="phone" color={'black'}>
                                            Phone Number
                                        </FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            <Select
                                                w="40%"
                                                // focusBorderColor="red.200"
                                                defaultValue="+234" // Set the default country code or area code here
                                                onChange={(e) => {
                                                    form.setFieldValue('phone', ''); // Reset the phone number when the country code changes
                                                    form.setFieldValue('countryCode', e.target.value);
                                                }}
                                            >
                                                {/* Replace the options with the country codes or area codes you want to display */}
                                                <option value="+1">+1</option>
                                                <option value="+234">+234</option>
                                                <option value="+44">+44</option>
                                                {/* Add more country codes or area codes as needed */}
                                            </Select>
                                            <Input
                                                {...field}
                                                id=" phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                // focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>





                        <Text mb={"15px"} mt={"20px "} fontSize={"29px"} borderBottom={"2px solid #D9D9D9"} m={"10px auto"} maxW={{base:"360px",md:"800px"}}  pb={"10px"}>
                            Address
                        </Text>


                        <Stack m={{base:"0 auto",md:" 15px 0"}}  spacing={9}  maxW={{base:"360px",md:"800px"}}  mb={6} direction={{base: 'column', md: 'row'}}>
                            <Field name="country">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.country && form.touched.country}>
                                        <FormLabel fontSize={"20px"} htmlFor="country" color={'black'}>Country</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaUser color="gray.200"/>}/>*/}
                                            <Input {...field} id="country"/>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.country}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="street_address">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.street_address && form.touched.street_address}>
                                        <FormLabel fontSize={"20px"} htmlFor="street_address" color={'black'}>Street Address</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaUser color="gray.300"/>}/>*/}
                                            <Input {...field} id="street_address" placeholder="start with street name"/>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.street_address}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>

                        <Stack  spacing={9} m={{base:"0 auto",md:" 15px 0"}} maxW={{base:"360px",md:"800px"}}   direction={{base: 'column', md: 'row'}}>
                            <Field name="state">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.state && form.touched.state}>
                                        <FormLabel fontSize={"20px"} htmlFor="state" color={'black'}>State</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaLock color="gray.300"/>}/>*/}
                                            <Input
                                                {...field}
                                                id="state"
                                                type="text"

                                                // focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage maxW={"350px"} >{form.errors.state}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="city">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.city && form.touched.city}>
                                        <FormLabel fontSize={"20px"} htmlFor="city" color={'black'}>City/Town</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaLock color="gray.300"/>}/>*/}
                                            <Input
                                                {...field}
                                                id="city"
                                                type="text"

                                                // focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage maxW={"350px"} >{form.errors.city}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>

                        <Stack  spacing={9} m={{base:"0 auto",md:" 15px 0"}} maxW={{base:"360px",md:"800px"}}   direction={{base: 'column', md: 'row'}}>

                            <Field name="post_code">
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.post_code && form.touched.post_code}>
                                        <FormLabel fontSize={"20px"} htmlFor="city" color={'black'}>Post Code</FormLabel>
                                        <InputGroup maxW={"350px"}>
                                            {/*<InputLeftElement pointerEvents="none"*/}
                                            {/*                  children={<FaLock color="gray.300"/>}/>*/}
                                            <Input
                                                {...field}
                                                id="post_code"
                                                type="text"

                                                // focusBorderColor="red.200"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage maxW={"350px"} >{form.errors.post_code}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>



                       <Flex justifyContent={{base:"center",md:"start"}}>
                           <Button fontSize={"18px"} p={"25px 30px"} color={"white"} borderRadius={"0"} type="submit" bg="#A7016E"  w={"100%"} maxW={{base:"350px",md:"fit-content"}}  mt={4}>
                               SAVE ADDRESS
                           </Button>
                       </Flex>

                    </Form>
                </Formik>


        </Box>
    )
}

export default AddressBookComp;