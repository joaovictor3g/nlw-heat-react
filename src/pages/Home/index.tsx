import { LoginBox } from "../../components/LoginBox";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { useAuth } from "../../contexts/AuthContext";
import { Main, Wrapper } from "./styles";

export function Home() {
  const { user } = useAuth();

  return(
    <Main hasSignedUser={!!user}>
     <Wrapper>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
     </Wrapper>
    </Main>
  );
}