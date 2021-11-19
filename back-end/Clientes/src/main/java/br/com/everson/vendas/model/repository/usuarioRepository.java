package br.com.everson.vendas.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.everson.vendas.model.entity.Usuario;

public interface usuarioRepository  extends JpaRepository<Usuario, Long>{
	Optional<Usuario> findByUsername(String username);

    boolean existsByUsername(String username);
}
