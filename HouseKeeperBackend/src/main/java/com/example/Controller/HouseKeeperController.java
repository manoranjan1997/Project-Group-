package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Worker;
import com.example.Service.WorkerService;

@RestController
@CrossOrigin("*")
public class HouseKeeperController {

    @Autowired
    private WorkerService workerService;

    @PostMapping("/registerWorker/{hostel}")
    public Worker registerWorker(@RequestBody Worker worker, @PathVariable("hostel") String hostel) {
        worker.setHostel(hostel);
        return this.workerService.registerWorker(worker);
    }
//sai sudha
    
    @GetMapping("/getHouseKeeperByFloor/{floor}/{hostel}")
    public List<Worker> getWorkerByFloor(@PathVariable("floor") int floor, @PathVariable("hostel") String hostel) {
        return this.workerService.getWorkerByFloor(floor, hostel);
    }
    
    //mano
    
    @GetMapping("/getWorkerByNameAndFloor/{hostel}")
    public List<Worker> getWorkerByNameAndFloor(@PathVariable("hostel") String hostel) {
        return this.workerService.getWorkerByNameAndFloor(hostel);
    }
    
}
