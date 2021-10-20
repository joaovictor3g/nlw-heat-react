import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }
`;

export const MessageListBox = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  justify-content: center;
`;

export const MessageListItem = styled.li`
  max-width: 440px;

  &:nth-child(2) {
    margin-left: 80px;
  }

  .message-user {
    margin-top: 16px;
    display: flex;
    align-items: center;

    .user-image {
      padding: 2px;
      background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
      border-radius: 50%;
      line-height: 0;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid #121214;
      }
    }

    span {
      font-size: 16px;
      margin-left: 12px;
    }
  }
`;

export const MessageText = styled.p`
  font-size: 20px;
  line-height: 28px;
`;
