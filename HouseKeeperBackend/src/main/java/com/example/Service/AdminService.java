package com.example.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Admin;
import com.example.dao.AdminRepo;

@Service
public class AdminService {

	@Autowired
	private AdminRepo adminRepo;
	
	//shaheda
	
	public Admin saveAdmin(Admin admin) {
		return this.adminRepo.saveAndFlush(admin);
	}
	
	//mano
	
	public List<Admin> getAllAdmin(){
		return this.adminRepo.findAll();
	}

	
//Shaheda
	
	public Admin checkAdmin(Admin admin) {
		// TODO Auto-generated method stub
		List<Admin> findAll = this.adminRepo.findAll();
		
		for(Admin ad:findAll) {
			if(admin.getUsername().equals(ad.getUsername()) && admin.getPassword().equals(ad.getPassword()))
				return ad;
		}
		return null;
	}

	//mano
	
	public Admin getAdminById(int id) {
		// TODO Auto-generated method stub
		Optional<Admin> findById = this.adminRepo.findById(id);
		return findById.get();
	}
}
