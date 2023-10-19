package com.employeeManagementSystem.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.employeeManagementSystem.model.Employee;
import com.employeeManagementSystem.repository.EmployeeRepo;
import com.employeeManagementSystem.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepo employeeRepo;

    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public Employee addEmployee(Employee employee) {
        Employee emp = employeeRepo.save(employee);
        return emp;
    }

    @Override
    public String removeEmployee(int id) {
        employeeRepo.deleteById(id);
        return "Delete Data Is successfully";
    }

    @Override
    public Optional<Employee> findEmpbyid(int id) {
        return employeeRepo.findById(id);
    }

  
    @Override
    public List<Employee> getAllEmployee() {
       return employeeRepo.findAll();
    }

    @Override
    public String updateEmployee(int id) {
     return null;

    }
}
