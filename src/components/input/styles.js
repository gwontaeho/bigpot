import styled from "styled-components";

export const Container = styled.input`
  border: 1px solid #efefef;
  border-radius: 3px;
  width: ${(props) => `${props.width}px`};
  height: 50px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  caret-color: #cabe9f;

  :invalid {
    color: #ff4141;
    border-color: #ff4141;
  }

  :disabled {
    background-color: #efefef;
    border-color: #cccccc;
    ::placeholder {
      color: #9a9a9a;
    }
  }

  ::placeholder {
    color: #cccccc;
  }
`;
