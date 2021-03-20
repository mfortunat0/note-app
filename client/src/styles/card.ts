import styled from "styled-components";

interface IContainer {
  active: boolean;
}

const Title = styled.p`
  font-weight: 900;
  color: ${(props) => props.theme.softWhite};
`;

const Text = styled.p`
  color: ${(props) => props.theme.softWhite};
`;

const Container = styled.div<IContainer>`
  width: 100%;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => (props.active ? "white" : "#555")};
  :hover {
    background-color: ${(props) => props.theme.dark};
    color: white;
  }
`;

export { Title, Container, Text };
