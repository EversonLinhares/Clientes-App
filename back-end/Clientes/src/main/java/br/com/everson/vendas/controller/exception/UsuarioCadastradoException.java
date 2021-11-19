package br.com.everson.vendas.controller.exception;

@SuppressWarnings("serial")
public class UsuarioCadastradoException  extends RuntimeException{

	public UsuarioCadastradoException(String login) {
		super("Usuario já cadastrado para o login" + "" + login);
	}
}
