import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display:  flex;
  align-items: center;
  justify-content: center;

`
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0,0,0, .10);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255,255,255, .7);
      }
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
      transition: all .2s ease;

      &:hover {
        background: ${darken(0.03, '#3b9eff')}
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: .7;

      &:hover {
        opacity: 1
      }
    }
  }
`