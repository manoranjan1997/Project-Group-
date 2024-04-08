package com.example.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.Feedback;
import com.example.Entity.Worker;
import com.example.dao.WorkerRepo;

@Service
public class WorkerService {

    @Autowired
    private WorkerRepo workerRepo;

    public Worker registerWorker(Worker worker) {
        return this.workerRepo.save(worker);
    }

    public List<Worker> getWorkerByFloor(int floor, String hostel) {
        return this.workerRepo.findByFloorAndHostel(floor, hostel);
    }
    

    public List<Worker> getWorkerByNameAndFloor(String hostel) {
        List<Worker> findAll = this.workerRepo.findAll();
        return findAll.stream().filter(item -> item.getHostel().equals(hostel)).collect(Collectors.toList());
    }

    public Worker getWorkerById(long workerId) {
        Optional<Worker> findById = this.workerRepo.findById(workerId);
        return findById.orElse(null);
    }



}