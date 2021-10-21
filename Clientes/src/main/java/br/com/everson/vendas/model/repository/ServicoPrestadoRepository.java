package br.com.everson.vendas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.everson.vendas.model.entity.ServicoPrestado;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Long> {

}
