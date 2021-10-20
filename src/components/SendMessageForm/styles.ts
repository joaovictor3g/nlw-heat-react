import styled from "styled-components";

export const Container = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  position: relative;

  .sign-out {
    background: transparent;
    border: 0;
    color: #c4c4cc;

    position: absolute;
    left: 24px;
    top: 24px;

    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-image {
    padding: 3px;
    background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;

    img {
      width: 94px;
      height: 94px;
      border-radius: 50%;
      border: 6px solid #121214;
    }
  }

  .username {
    font-size: 24px;
    line-height: 30px;
    margin-top: 16px;
  }

  .user-github {
    display: flex;
    align-items: center;

    margin-top: 8px;
    color: #c4c4cc;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;
  background: #202024;

  label {
    padding: 18px 24px;
    font-size: 20px;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: #e1e1e6;
    font-size: 16px;
    line-height: 24px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button[type='submit'] {
    align-self: flex-end;
    background: #ff008e;
    margin: 24px;
    padding: 0 32px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;