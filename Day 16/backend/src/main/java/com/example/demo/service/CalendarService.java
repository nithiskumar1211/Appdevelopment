package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Calendar;
// import com.example.demo.modal.Project;
import com.example.demo.repository.Calendarrepo;

@Service
public class CalendarService {
    @Autowired
    public Calendarrepo cr;
    public List<Calendar>getCalendar()
    {
       return cr.findAll();
    }
    public String posProject(Calendar pp)
    {
		 cr.save(pp);
		 return "Posted";
	}
	public String updateProject(Calendar pp)
	{
		 cr.save(pp);
		 return "Updated";
	}
	public String deletepro(int pid)
	{
		cr.deleteById(pid);
		return "Deleted";
	}
    public String postCalendar(Calendar ppTask, int pid) {
        return null;
    }
    public String updateCalendar(Calendar ppTask, int tid) {
        return null;
    }
    public String deleteCalendar(int pid) {
        return null;
    }
    
}
