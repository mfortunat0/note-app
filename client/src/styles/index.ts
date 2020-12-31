import styled from "styled-components";

interface IContainer {
  scroll?: boolean;
  column?: boolean;
}

interface IText {
  show: boolean;
}

interface IFloatButton {
  show: boolean;
  background: string;
}

const LeftBar = styled.div`
  height: 100vh;
  width: 30vw;
  border-right: 1px solid #ccc;
`;

const RightBar = styled.div`
  height: 100vh;
  width: 70vw;
  padding: 10px 0px 0px 0px;
`;

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  overflow: ${(props) => (props.scroll ? "auto" : "auto")};
  width: 100%;
  height: ${(props) => (props.scroll ? "80vh" : "100%")};
  scrollbar-base-color: aquamarine;
`;

const Header = styled.header`
  padding: 10px 20px 10px 20px;
  background-color: #13bbaf;
  color: white;
  height: 20vh;
`;

const SubTitle = styled.p`
  font-size: 13px;
  margin: 10px;
  font-weight: 700;
`;

const Button = styled.button`
  color: #13bbaf;
  background-color: white;
  font-weight: 900;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 50%;
  outline: none;
  height: 5vh;
  cursor: pointer;
  :hover& {
    background-color: transparent;
    color: white;
  }
`;

const FloatButton = styled.button<IFloatButton>`
  color: white;
  background-color: ${(props) => props.background};
  padding: 10px;
  text-align: center;
  font-weight: 900;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  position: fixed;
  margin-top: 90vh;
  margin-left: ${(props) => (props.background === "red" ? "64vw" : "59vw")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.3s;
  z-index: 2;
`;

const TextField = styled.input<IText>`
  height: 10vh;
  width: 100%;
  align-self: center;
  text-align: center;
  font-size: 40px;
  border: none;
  outline: none;
  color: #13bbaf;
  opacity: 0.5;
  font-weight: 900;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  ::placeholder {
    color: #13bbaf;
  }
  :focus {
    opacity: 1;
  }
`;

const TextArea = styled.textarea<IText>`
  height: 88vh;
  border: none;
  outline: none;
  resize: none;
  padding: 5vh;
  opacity: 0.5;
  font-weight: 700;
  font-size: 15px;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  ::placeholder {
    font-size: 40px;
    text-align: center;
    padding: 5vh;
  }
  ::selection {
    background-color: #13bbaf;
    color: white;
  }
  :focus {
    opacity: 1;
  }
`;

export {
  TextArea,
  TextField,
  Button,
  FloatButton,
  SubTitle,
  Header,
  Container,
  RightBar,
  LeftBar,
};
