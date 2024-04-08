package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.Entity.Feedback;
import com.example.Entity.Student;
import com.example.dao.FeedbackRepo;
import com.example.Service.FeedbackService;

class FeedbackServiceTest {

	@Mock
	private FeedbackRepo feedbackRepo;

	@InjectMocks
	private FeedbackService feedbackService;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	void testSubmitFeedback() {
		Feedback feedback = new Feedback();
		when(feedbackRepo.saveAndFlush(feedback)).thenReturn(feedback);

		Feedback savedFeedback = feedbackService.submitFeedback(feedback);

		assertNotNull(savedFeedback);
		assertEquals(feedback, savedFeedback);
	}

	@Test
	void testGetFeedbackCountByRollnumber() {
		Student student = new Student();
		List<Feedback> feedbackList = new ArrayList<>();
		feedbackList.add(new Feedback());
		feedbackList.add(new Feedback());

		when(feedbackRepo.findByStudent(student)).thenReturn(feedbackList);

		Integer feedbackCount = feedbackService.getFeedbackCountByRollnumber(student);

		assertNotNull(feedbackCount);
		assertEquals(2, feedbackCount);
	}


	@Test
	void testSubmitNullFeedback() {
		when(feedbackRepo.saveAndFlush(null)).thenReturn(null);

		Feedback savedFeedback = feedbackService.submitFeedback(null);

		assertNull(savedFeedback);
	}


	@Test
	void testGetFeedbackCountWithNoFeedback() {
		Student student = new Student();
		List<Feedback> emptyFeedbackList = new ArrayList<>();

		when(feedbackRepo.findByStudent(student)).thenReturn(emptyFeedbackList);

		Integer feedbackCount = feedbackService.getFeedbackCountByRollnumber(student);

		assertNotNull(feedbackCount);
		assertEquals(0, feedbackCount);
	}

}