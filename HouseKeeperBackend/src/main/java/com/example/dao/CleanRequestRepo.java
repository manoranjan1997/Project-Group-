package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Entity.CleanRequest;
import com.example.Entity.Student;

@Repository
public interface CleanRequestRepo extends JpaRepository<CleanRequest, Integer>{

	@Query(value="select count(request_id) from clean_request where rollnumber=:rollno",nativeQuery = true)
public	List<Integer> requestCount(@Param("rollno")long rollno);

	
	public List<CleanRequest> findAllByOrderByDateDesc();
	 List<CleanRequest> findByStudent(Student student);
	 

	
	

}
