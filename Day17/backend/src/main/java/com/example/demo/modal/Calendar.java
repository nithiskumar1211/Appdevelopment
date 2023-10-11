package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Calendar {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;

	@Column(length = 250, nullable = false)
	private String taskName;

	@Column(nullable = false)
	private String TaskStartDate;

	@Column(nullable = false)
	private String TaskEndDate;

	// @JsonManagedReference9
	@OneToOne
	@JoinColumn(name = "rid", referencedColumnName = "pid")
	private Report report;


}
