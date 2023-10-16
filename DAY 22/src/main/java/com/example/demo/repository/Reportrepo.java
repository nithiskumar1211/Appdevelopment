package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Report;

@Repository
public interface Reportrepo extends JpaRepository<Report,Integer>{
    
}
