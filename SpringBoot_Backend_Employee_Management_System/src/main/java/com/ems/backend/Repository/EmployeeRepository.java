package com.ems.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.backend.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
