import { Container } from "./styles";

export const Input = (props) => {
  return (
    <Container
      width={props.width}
      placeholder={props.placeholder}
      disabled={props.disabled}
      pattern="\d*"
    />
  );
};
