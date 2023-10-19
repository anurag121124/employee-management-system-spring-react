package com.employeeManagementSystem.service;

import java.util.List;
import java.util.Optional;

import com.employeeManagementSystem.model.Employee;

public interface EmployeeService {

    public Employee addEmployee(Employee employee);
    public String removeEmployee(int id);
    public Optional<Employee> findEmpbyid(int id);
    public String updateEmployee(int id);
    public List<Employee> getAllEmployee();


    
}
