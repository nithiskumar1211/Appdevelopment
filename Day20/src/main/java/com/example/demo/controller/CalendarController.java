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

import com.example.demo.modal.Calendar;
import com.example.demo.modal.Task;
import com.example.demo.service.CalendarService;

@RestController
@RequestMapping("/calendar")
public class CalendarController {
    @Autowired
    public CalendarService rc;
      @GetMapping("/getCalendar")
    public List<Calendar> get() {
        return rc.getCalendar();
    }

    @PostMapping("/postCalendar/{pid}")
    public String post(@RequestBody Calendar ppTask, @PathVariable int pid) {
        return rc.postCalendar(ppTask, pid);
    }

    @PutMapping("/updateCalendar/{tid}")
    public String update(@RequestBody Calendar ppTask, @PathVariable int tid) {
        return rc.updateCalendar(ppTask,tid);
    }

    @DeleteMapping("/deleteCalendar/{pid}")
    public String delete(@PathVariable int pid) {
        return rc.deleteCalendar( pid);
    }
    
}
