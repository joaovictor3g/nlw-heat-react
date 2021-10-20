import { FormEvent, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Container, Form, Header } from "./styles";

export function SendMessageForm() {
  const { user, signOut } = useAuth();
  const [message, setMessage] = useState('');

  async function handleSendMessage(e: FormEvent) {
    e.preventDefault();
    
    if(!message.trim()) {
      return;
    }

    await api.post(`/messages`, { message });

    setMessage('');
  }

  return (
    <Container>
      <button className="sign-out" onClick={signOut}>
        <VscSignOut size="32"/>
      </button>

      <Header>
        <div className="user-image">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className="username">
          {user?.name}
        </strong>

        <span className="user-github">
          <VscGithubInverted size="16"/>
          {user?.login}
        </span>
      </Header>

      <Form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="Qual a sua expectativa para o evento?" 
          onChange={e => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </Form>
    </Container>
  );
}