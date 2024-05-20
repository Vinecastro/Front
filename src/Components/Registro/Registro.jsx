import { useState } from "react";
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import "./Registro.css";

const Registro = () => {
  // Estados para armazenar as entradas do usuário
  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    // Faz o console log das credenciais do usuário
    console.log("Dados de Cadastro:", { nome, username, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastrar-se</h1>
        
        <div className="input-nome">
          <input
            type="text"
            placeholder="Nome"
            required
            value={nome}  
            onChange={(e) => setNome(e.target.value)}
        />
          <FaUserCircle className="icon" />
        </div>
         
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Cadastrar</button>
        <div className="signup-link">
        </div>
      </form>
    </div>
  );
};

export default Registro;
