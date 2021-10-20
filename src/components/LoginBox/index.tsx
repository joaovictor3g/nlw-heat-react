import { Container, GithubSign } from "./styles";
import { VscGithubInverted } from 'react-icons/vsc';

export function LoginBox() {
  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <GithubSign href="#">
        <VscGithubInverted size={24}/>
        Entrar com Github
      </GithubSign>
    </Container>
  )
}
