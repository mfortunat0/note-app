import styled from "styled-components";

interface IContainer {
  active: boolean;
}

const Title = styled.p`
  font-weight: 900;
`;

const Container = styled.div<IContainer>`
  width: 100%;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid #13bbaf;
  transition: all 0.2s;
  background-color: ${(props) => (props.active ? "#13BBAF" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#555")};
  :hover {
    background-color: #13bbaf;
    color: white;
  }
`;

export { Title, Container };