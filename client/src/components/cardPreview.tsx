import { Container, Title } from "../styles/card";

export default function CardPreview(props) {
  return (
    <Container active={props.status} id={props.id}>
      <Title>{props.title}</Title>
      <p>{props.content}</p>
      <p>Last modified: {props.lastModified}</p>
    </Container>
  );
}
