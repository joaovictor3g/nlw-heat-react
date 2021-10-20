import { Container, MessageListBox, MessageListItem, MessageText } from "./styles";
import logoImg from '../../assets/logo.svg';


export function MessageList() {
  return (
    <Container>
      <img src={logoImg} alt="DoWhile 2021" />

      <MessageListBox>
        <MessageListItem>
          <MessageText>Um texto gigante</MessageText>

          <div className="message-user">
            <div className="user-image">
              <img src="https://github.com/joaovictor3g.png" alt="João Victor" />
            </div>

            <span>
              João Victor
            </span>
          </div>
        </MessageListItem>
        <MessageListItem>
          <p>Um texto gigante</p>

          <div className="message-user">
            <div className="user-image">
              <img src="https://github.com/joaovictor3g.png" alt="João Victor" />
            </div>

            <span>
              João Victor
            </span>
          </div>
        </MessageListItem>
        <MessageListItem>
          <p>Um texto gigante</p>

          <div className="message-user">
            <div className="user-image">
              <img src="https://github.com/joaovictor3g.png" alt="João Victor" />
            </div>

            <span>
              João Victor
            </span>
          </div>
        </MessageListItem>
        
      </MessageListBox>
    </Container>
  );
}