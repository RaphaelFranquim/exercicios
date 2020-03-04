function escreve_mensagem(nome, email, sexo, data){
	mensagem = "Nome: '"+nome+"'\n Email: '"+email+"'\n Sexo: '"+sexo+"'\n Data: '"+data+"' ";
	if(nome == "" || email == "" || sexo == "" || data == ""){
		mensagem_erro = "";
		if(nome == ""){
			mensagem_erro += "Nome: Sem dados \n";
		}
		if (email == ""){
			mensagem_erro += "Email: Sem dados \n";
		}
		if (sexo == ""){
			mensagem_erro += "Sexo: Sem dados \n";
		}
		if (data == ""){
			mensagem_erro += "Data: Sem dados";
		}
		alert(mensagem_erro);
	}
	else{
		alert(mensagem);
	}
}