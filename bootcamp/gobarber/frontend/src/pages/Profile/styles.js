import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin-bottom: 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      font-size: 16px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      transition: all 0.2s ease;

      &:hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    height: 44px;
    font-size: 16px;
    padding: 0 15px;
    color: #fff;
    margin: 5px 0 10px;
    transition: all 0.2s ease;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
