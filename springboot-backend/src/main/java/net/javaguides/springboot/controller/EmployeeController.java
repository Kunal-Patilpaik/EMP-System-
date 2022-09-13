package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourseNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepositry;
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepositry.findAll();
	}
	@PostMapping("/employees")
	public Employee getEmployee(@RequestBody Employee employee) {
		return employeeRepositry.save(employee);
	}
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp=employeeRepositry.findById(id).orElseThrow(()->new ResourseNotFoundException("Employee not exists"+id));
		return ResponseEntity.ok(emp);
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee) {
		Employee emp=employeeRepositry.findById(id).orElseThrow(()->new ResourseNotFoundException("Employee not exists"+id));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmailId(employee.getEmailId());
		Employee updateEmployee=employeeRepositry.save(emp);
		return ResponseEntity.ok(updateEmployee);
	}
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmpoloyee(@PathVariable Long id){
		Employee emp=employeeRepositry.findById(id).orElseThrow(()->new ResourseNotFoundException("Employee not exists"+id));
		employeeRepositry.delete(emp);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
