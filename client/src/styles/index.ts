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
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.dark};
  }
`;

const Header = styled.header`
  padding: 10px 20px 10px 20px;
  background-color: ${(props) => props.theme.dark};
  color: white;
  height: 20vh;
`;

const SubTitle = styled.p`
  font-size: 13px;
  margin: 10px;
  font-weight: 700;
`;

const Button = styled.button`
  color: ${(props) => props.theme.softWhite};
  background-color: ${(props) => props.theme.purple};
  font-weight: 900;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 4px;
  outline: none;
  height: 5vh;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const FloatButton = styled.button<IFloatButton>`
  color: white;
  background-color: ${(props) => props.theme.purple};
  padding: 10px;
  text-align: center;
  font-weight: 900;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  margin: 0 0.5vw 0 0.5vw;
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const FloatButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TextField = styled.input<IText>`
  height: 10vh;
  width: 100%;
  align-self: center;
  text-align: center;
  font-size: 40px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.black};
  opacity: 0.5;
  font-weight: 900;
  background-color: transparent;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  transition: opacity 0.3s ease-in-out;
  &:focus {
    opacity: 1;
  }
`;

const TextArea = styled.textarea<IText>`
  height: 80vh;
  border: none;
  outline: none;
  resize: none;
  padding: 5vh;
  opacity: 0.5;
  font-weight: 700;
  font-size: 15px;
  background-color: transparent;
  display: ${(props) => (props.show ? "inline-block" : "none")};
  color: ${(props) => props.theme.black};
  transition: opacity 0.3s ease-in-out;
  &::placeholder {
    font-size: 40px;
    text-align: center;
    padding: 5vh;
  }
  &:focus {
    opacity: 1;
  }
`;

export {
  TextArea,
  TextField,
  Button,
  FloatButton,
  FloatButtonContainer,
  SubTitle,
  Header,
  Container,
  RightBar,
  LeftBar,
};
