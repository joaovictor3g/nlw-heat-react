import { Container, MessageListBox, MessageListItem, MessageText } from "./styles";
import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Message } from "../../types";
import { io } from 'socket.io-client';

const messagesQueue: Message[] = [];

const socket = io(`http://localhost:3333`);

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>(`/messages/last3`).then(res => setMessages(res.data));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(messages.length > 0) {
        setMessages(prevState => [ messagesQueue[0], prevState[0], prevState[1] ].filter(Boolean));
      
        messagesQueue.shift();
      }
    }, 3000);

    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="DoWhile 2021" />

      <MessageListBox>
        {messages.map((message, i) => (
          <MessageListItem key={`${message.id}-${i}`}>
            <MessageText>{message.text}</MessageText>

            <div className="message-user">
              <div className="user-image">
                <img src={message.user.avatar_url} alt={message.user.name} />
              </div>

              <span>
                {message.user.name}
              </span>
            </div>
          </MessageListItem>
        ))}
        
      </MessageListBox>
    </Container>
  );
}