package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Calendar;
import com.example.demo.modal.Report;
import com.example.demo.modal.Task;
import com.example.demo.repository.Calendarrepo;
import com.example.demo.repository.Projectrepo;
import com.example.demo.repository.Reportrepo;
import com.example.demo.repository.Taskrepo;
import com.example.demo.repository.UserRepository;

@Service
public class TaskService {
    @Autowired
    public Taskrepo task;
    @Autowired
    public Projectrepo projectrepo;
    @Autowired
    public Calendarrepo calendarrepo;
    @Autowired
    public Reportrepo reportrepo;
    @Autowired
    public UserRepository userRepository;

    public List<Task> getTask() {
        return task.findAll();
    }

    public String posTask(Task pt, int pid, Long id) {
        pt.setProject(projectrepo.findById(pid).get());

        pt.setUser(userRepository.findById(id).get());

        Report report = reportrepo.save(pt.getCalendar().getReport());
        Calendar calendar = pt.getCalendar();
        calendar.setReport(report);

        Calendar cal = calendarrepo.save(calendar);
        pt.setCalendar(calendarrepo.findById(cal.getPid()).get());

        cal.setReport(report);
        pt.setCalendar(cal);
        task.save(pt);
        return "Posted";
    }

    public String updatetask(Task pt,int tid) {
        Task t = task.findById(tid).get();
        t.setTaskName(pt.getTaskName());
        t.setStartDate(pt.getStartDate());
        t.setEndDate(pt.getEndDate());
        task.save(t);
        return "updated";
    }

    public String delTask(int pid) {
        task.deleteById(pid);
        return "Deleted";
    }

}
