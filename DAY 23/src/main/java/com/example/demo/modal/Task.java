
package com.example.demo.modal;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int tid;

	@Column(length = 250, nullable = false)
	private String TaskName;

	@Column(nullable = false)
	private String StartDate;

	@Column(nullable = false)
	private String EndDate;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "pid")
	private Project project;

	@OneToOne
	@JoinColumn(name = "cid",referencedColumnName = "pid")
	private Calendar calendar;

	@OneToOne
	@JoinColumn(name = "uid",referencedColumnName = "id")
	private User user;
}
