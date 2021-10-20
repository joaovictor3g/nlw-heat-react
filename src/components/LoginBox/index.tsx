import { Container, GithubSign } from "./styles";
import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from "../../contexts/AuthContext";

export function LoginBox() {
  const { signUrl, user } = useAuth();

  console.log(user);

  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <GithubSign href={signUrl}>
        <VscGithubInverted size={24}/>
        Entrar com Github
      </GithubSign>
    </Container>
  )
}
