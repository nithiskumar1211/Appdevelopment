package com.example.demo.modal;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Project {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int pid;

	    @Column
	    (length = 250, nullable = false)
	    private String projectName;

	    @Column(nullable = false)
	    private String StartDate;

	    @Column(nullable = false)
	    private String EndDate;

		@JsonManagedReference
		@OneToMany(mappedBy = "project",cascade = CascadeType.ALL)
		private List<Task> tasks = new ArrayList<>();

}
