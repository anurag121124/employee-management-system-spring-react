import { VStack, Heading, Box, FormControl, FormLabel, Input, Button, Flex, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { addNewEmployee } from '../api/EmployeeApi';
import { Navigation } from './Navigation';

export const AddEmployee = () => {
    const [data, setData] = useState({
        fullName: '',
        dateOfBirth: '',
        jobTitle: '',
        department: '',
        dateOfHire: '',
        contactPhoneNumber: '',
        contactEmail: '',
        managerSupervisor: '',
        salary: 0,  // Replace with the desired salary
        employmentStatus: 'Full-time',
    });
    const toast = useToast();

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const resp = await addNewEmployee(data);
        console.log(resp);
        toast({
            title: 'Success',
            description: 'Employee has been added.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <>
            <Navigation />
            <VStack justify={"center"}>
                <Box>
                    <Heading mb={5} size={{ base: "base", sm: "sm", md: "md", lg: "lg" }} fontWeight={"md"}>Add a new employee</Heading>
                    <form onSubmit={onSubmit}>
                        <Flex direction={"column"} gap={5}>
                            <FormControl isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input onChange={handleInput} name="fullName" type="text" />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Date of Birth (yyyy-MM-dd)</FormLabel>
                                <Input onChange={handleInput} name="dateOfBirth" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Job Title</FormLabel>
                                <Input onChange={handleInput} name="jobTitle" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Department</FormLabel>
                                <Input onChange={handleInput} name="department" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Date of Hire (yyyy-MM-dd)</FormLabel>
                                <Input onChange={handleInput} name="dateOfHire" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Contact Phone Number</FormLabel>
                                <Input onChange={handleInput} name="contactPhoneNumber" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Contact Email</FormLabel>
                                <Input onChange={handleInput} name="contactEmail" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Manager/Supervisor</FormLabel>
                                <Input onChange={handleInput} name="managerSupervisor" type='text' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Salary</FormLabel>
                                <Input onChange={handleInput} name="salary" type='number' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Employment Status</FormLabel>
                                <Input onChange={handleInput} name="employmentStatus" type='text' />
                            </FormControl>
                            <FormControl>
                                <Button type="submit" width="100%">Add</Button>
                            </FormControl>
                        </Flex>
                    </form>
                </Box>
            </VStack>
        </>
    );
};
