package br.com.everson.vendas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.everson.vendas.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
