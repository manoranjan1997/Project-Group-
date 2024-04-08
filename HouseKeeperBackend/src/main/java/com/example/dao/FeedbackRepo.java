package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.Entity.Feedback;
import com.example.Entity.Student;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{

	@Query(value = "select count(feedback_id) from feedback",nativeQuery = true)
	public Integer getFeedbackCount();

	public List<Feedback> findByStudent(Student student);


}
