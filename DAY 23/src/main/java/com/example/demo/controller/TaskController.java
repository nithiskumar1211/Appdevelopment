package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.Task;
import com.example.demo.service.TaskService;

@RestController
@RequestMapping("/task")

public class TaskController {
    @Autowired
    public TaskService ts;

    @GetMapping("/gettask")
    public List<Task> get() {   
        return ts.getTask();
    }
    
    @PostMapping("/posttask/{pid}/{id}")
    public String post(@RequestBody Task ppTask, @PathVariable int pid,@PathVariable Long id) {
        return ts.posTask(ppTask, pid,id);
    }

    @PutMapping("/updatetask/{tid}")
    public String update(@RequestBody Task ppTaskk, @PathVariable int tid) {
        return ts.updatetask(ppTaskk,tid);
    }

    @DeleteMapping("/deletetask/{pid}")
    public String delete(@PathVariable int pid) {
        return ts.delTask(pid);
    }

}
