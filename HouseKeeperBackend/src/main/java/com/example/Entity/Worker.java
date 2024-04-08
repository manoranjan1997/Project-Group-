package com.example.Entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Worker {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long worker_id;
	private String name;
	private int floor;
	private String hostel;
	
	@OneToMany(cascade = CascadeType.ALL )

	private List<CleanRequest> cleanRequest;
	
	public String getHostel() {
		return hostel;
	}
	public void setHostel(String hostel) {
		this.hostel = hostel;
	}
	public void setWorker_id(long worker_id) {
		this.worker_id = worker_id;
	}
	public List<CleanRequest> getCleanRequest() {
		return cleanRequest;
	}
	public void setCleanRequest(List<CleanRequest> cleanRequest) {
		this.cleanRequest = cleanRequest;
	}
	public long getWorker_id() {
		return worker_id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	
	
}
