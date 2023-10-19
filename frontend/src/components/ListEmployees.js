import { Box, Heading, VStack, Button, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { getEmployees, removeEmployee } from '../api/EmployeeApi';
import { useNavigate } from 'react-router-dom';

export const ListEmployees = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getEmployees();
                setData(response);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };
        getData();
    }, []);

    const removeEmployeeC = async (id) => {
        try {
            const response = await removeEmployee(id);
            console.log(response);
            // You might want to update the data state after removing an employee
        } catch (error) {
            console.error("Error removing employee:", error);
        }
    };

    return (
        <>
            <Navigation />
            <VStack justify={"center"}>
                <Box>
                    <Heading size={{ base: "base", sm: "sm", md: "md", lg: "lg" }} fontWeight={"md"}>List of employees</Heading>
                </Box>
                <Box>
                    <TableContainer>
                        <Button onClick={() => navigate('/addEmployee')} size="sm" mb={5} variant={"outline"} colorScheme={"cyan"}>Add new employee</Button>
                        {data.map(item => (
                            <Table size={"sm"} variant='striped' key={item.id}>
                                <Tbody>
                                    <Tr>
                                        <Td>Full Name: {item.fullName}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Date of Birth: {item.dateOfBirth}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Job Title: {item.jobTitle}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Department: {item.department}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Date of Hire: {item.dateOfHire}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Contact Phone Number: {item.contactPhoneNumber}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Contact Email: {item.contactEmail}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Manager/Supervisor: {item.managerSupervisor}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Salary: {item.salary}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Employment Status: {item.employmentStatus}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Button onClick={() => navigate(`/editEmployee/${item.id}`)} variant={"outline"} colorScheme="blue">Edit</Button>
                                                <Button onClick={() => removeEmployeeC(item.id)} variant={"outline"} colorScheme="red">Delete</Button>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        ))}
                    </TableContainer>
                </Box>
            </VStack>
        </>
    );
};
