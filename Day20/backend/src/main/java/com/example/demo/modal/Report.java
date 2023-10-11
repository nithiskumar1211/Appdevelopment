package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Report {
    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int pid;

	    @Column
	    (length = 250, nullable = false)
	    private String name;

	    @Column(nullable = false)
	    private String StartDate;
		
	    @Column(nullable = false)
	    private String EndDate;
    
}
