package br.com.everson.vendas.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.everson.vendas.model.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

}
