import { LoginBox } from "../../components/LoginBox";
import { MessageList } from "../../components/MessageList";
import { Main } from "./styles";

export function Home() {
  return(
    <Main>
      <MessageList />
      <LoginBox />
    </Main>
  );
}