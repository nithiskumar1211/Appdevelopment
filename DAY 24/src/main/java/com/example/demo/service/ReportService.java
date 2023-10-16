package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Report;
import com.example.demo.modal.Task;
import com.example.demo.repository.Projectrepo;
import com.example.demo.repository.Reportrepo;

@Service
public class ReportService {
    @Autowired
    public Reportrepo rr;
    @Autowired
    public Projectrepo pt;
public List<Report> getreport() {
        return rr.findAll();
    }

    public String posreport(Report rep, int pid) {
        // rep.setProject(pt.findById(pid).get());
        rr.save(rep);
        return "Posted";
    }

    public String updatereport(Report pt,int tid) {
        Report t = rr.findById(tid).get();
        t.setName(pt.getName());
        t.setStartDate(pt.getStartDate());
        t.setEndDate(pt.getEndDate());
        rr.save(t);
        return "updated";
    }

    public String delreport(int pid) {
        rr.deleteById(pid);
        return "Deleted";
    }

    
}
