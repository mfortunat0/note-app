import Head from "next/head";
import {
  Container,
  Header,
  TextField,
  TextArea,
  SubTitle,
  RightBar,
  LeftBar,
  Button,
} from "../styles/index";
import CardPreview from "../components/cardPreview";
import { useState, useRef } from "react";

export default function Home() {
  const [cardActive, setCardActive] = useState(null);
  const textAreaRef = useRef<HTMLInputElement>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const data = [
    {
      id: 1,
      title: "Titulo1",
      content: "Conteudo novo",
    },
    {
      id: 1,
      title: "Titulo1",
      content: "Conteudo novo",
    },
  ];

  const clickItem = (e) => {
    if (e.target.parentElement.id || e.target.id) {
      const id = e.target.parentElement.id || e.target.id;
      setCardActive(id);
      textFieldRef.current.value = data[id].title;
      textAreaRef.current.value = data[id].content;
    }
  };

  return (
    <>
      <Head>
        <title>App Notes</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <LeftBar onClick={clickItem}>
          <Header>
            <h2>Todas as Notas</h2>
            <Container>
              <SubTitle>{`${data.length} Notas`}</SubTitle>
              <Button onClick={() => alert("")}>New</Button>
            </Container>
          </Header>
          <Container column scroll>
            {data.map((value, index) => (
              <CardPreview
                status={index === parseInt(cardActive, 10)}
                id={index}
                key={index}
                title={value.title}
                content={value.content}
              />
            ))}
          </Container>
        </LeftBar>
        <RightBar>
          <Container column>
            <TextField ref={textFieldRef} />
            <TextArea ref={textAreaRef} />
          </Container>
        </RightBar>
      </Container>
    </>
  );
}
