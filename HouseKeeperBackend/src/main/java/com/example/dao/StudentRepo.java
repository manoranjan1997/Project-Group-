package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Entity.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

	public Student findByRollnumber(long rollnumber);

	public List<Student> findAllByHostel(String hostel);
}
