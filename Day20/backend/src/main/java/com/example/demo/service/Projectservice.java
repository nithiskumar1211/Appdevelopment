package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Calendar;
import com.example.demo.modal.Project;
import com.example.demo.repository.Projectrepo;

@Service
public class Projectservice {
	@Autowired
	public Projectrepo pr;
	public List<Project> getProject()
	{
		return pr.findAll();
	}
	public String posProject(Project pp)
	{
		pr.save(pp);
		 return "Posted";
	}
	public String updateProject(Project pp)
	{
		 pr.save(pp);
		 return "Updated";
	}
	public String deletepro(int pid)
	{
		pr.deleteById(pid);
		return "Deleted";
	}
	

}
