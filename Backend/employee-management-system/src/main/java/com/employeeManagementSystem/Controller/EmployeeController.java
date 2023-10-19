package com.employeeManagementSystem.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.employeeManagementSystem.model.Employee;
import com.employeeManagementSystem.serviceImpl.EmployeeServiceImpl;

@RestController
@RequestMapping("/emp")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl empservice;

    @GetMapping("/home")
    public String Homepage() {
        return "Welcome to Employee Management system";
    }

    @PostMapping("/addEmp")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee emp = empservice.addEmployee(employee);
        return new ResponseEntity<>(emp, HttpStatus.CREATED);
    }

    @DeleteMapping("/removeEmp/{id}")
    public ResponseEntity<String> removeEmployee(@PathVariable int id) {
        empservice.removeEmployee(id);
        return new ResponseEntity<>("Remove Successfully", HttpStatus.ACCEPTED);
    }

    @GetMapping("/findEmp/{id}")
    public ResponseEntity<Optional<Employee>> findEmployeebyid(@PathVariable int id) {
        Optional<Employee> emps = empservice.findEmpbyid(id);
        return new ResponseEntity<>(emps, HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> listOfEmployee() {
        List<Employee> lEmp = empservice.getAllEmployee();
        return new ResponseEntity<>(lEmp, HttpStatus.OK);
    }
}
