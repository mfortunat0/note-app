import { Container, Title, Text } from "../styles/card";

export default function CardPreview(props) {
  return (
    <Container active={props.status} id={props.id}>
      <Title>{props.title}</Title>
      <Text>{props.content}</Text>
      <Text>Last modified: {props.lastModified}</Text>
    </Container>
  );
}
