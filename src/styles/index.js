import styled from 'styled-components'

const LeftBar = styled.div`
  height: 100vh;
  width: 30vw;
  border-right: 1px solid #ccc;
`

const RightBar = styled.div`
  height: 100vh;
  width: 70vw;
  padding: 40px 0px 0px 0px;

`

const Container = styled.div`
  display: flex;
  flex-direction: ${prosp => prosp.column ? 'column' : 'row'};
  overflow: ${props => props.scroll ? 'auto' : 'hidden'};
  width: 100%;
  height: ${props => props.scroll ? '80vh' : '100%'};
`

const Header = styled.header`
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid #ddd;
  background-color: #13BBAF;
  color: white;
  height:20vh;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
`

const SubTitle = styled.p`
  font-size: 13px;
  margin: 10px;
  font-weight: 700;
`

const Button = styled.button`
  color: #13BBAF;
  background-color: white;
  font-weight: 900;
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 50%;
  outline: none;
  height: 5vh;
  cursor: pointer;
  :hover&{
    background-color: transparent;
    color: white;
  }
`

const TextField = styled.input.attrs({ placeholder: 'Title' })`
  height: 10vh;
  width: 100%;
  align-self: center;
  text-align: center;
  font-size: 40px;
  border: none;
  outline: none;
  color:#13BBAF;
  opacity: 0.5;
  font-weight: 900;
  ::placeholder{
    color:#13BBAF;
  }
  :focus{
    opacity: 1;
  }
`

const TextArea = styled.textarea.attrs({ placeholder: 'Empty' })`
  height: 80vh;
  border: none;
  outline: none;
  resize: none;
  padding: 5vh;
  opacity: 0.5;
  font-weight: 700;
  font-size: 15px;
  ::placeholder{
    font-size: 40px;
    text-align: center;
    padding: 5vh
  };
  ::selection{
    background-color:#13BBAF;
    color:white;
  };
  :focus{
    opacity: 1;
  };
`

export { TextArea, TextField, Button, SubTitle, Header, Container, RightBar, LeftBar }
