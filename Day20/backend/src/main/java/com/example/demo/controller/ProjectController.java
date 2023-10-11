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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.Project;
import com.example.demo.service.Projectservice;

@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    public Projectservice ps;

    @GetMapping("/getproject")
    public List<Project> get() {
        return ps.getProject();
    }

    @PostMapping("/postproject")
    public String post(@RequestBody Project pp) {
        return ps.posProject(pp);
    }

    @PutMapping("/updateproject/{pid}")
    public String update(@RequestBody Project pp, @PathVariable int pid) {
        pp.setPid(pid);
        return ps.updateProject(pp);
    }

    @DeleteMapping("/deleteproject/{pid}")
    public String update(@PathVariable int pid) {
        return ps.deletepro(pid);
    }
}
