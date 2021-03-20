import Head from "next/head";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import {
  Container,
  Header,
  TextField,
  TextArea,
  SubTitle,
  RightBar,
  LeftBar,
  Button,
  FloatButton,
  FloatButtonContainer,
} from "../styles/index";
import CardPreview from "../components/cardPreview";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  interface IData {
    id: string;
    title: string;
    content: string;
    createdat: string;
  }
  const [cardActive, setCardActive] = useState(null);
  const [data, setData] = useState<IData[]>([]);
  const [inputsShow, setInputShow] = useState(false);
  const [inputChanged, setInputChanged] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  const getNotes = async () => {
    const {
      data: { notes },
    } = await client.query({
      query: gql`
        query {
          notes {
            title
            content
            id
            createdat
          }
        }
      `,
    });
    setData(notes);
  };

  const newNoteHandle = async () => {
    const {
      data: {
        createNote: { id, title, content },
      },
    } = await client.mutate({
      mutation: gql`
        mutation {
          createNote(note: { title: "New Document", content: "Empty" }) {
            title
            content
            id
          }
        }
      `,
    });
    getNotes();
    setCardActive(id);
    textFieldRef.current.value = title;
    textAreaRef.current.value = content;
    setInputShow(true);
  };

  const updateNote = async (title: string, content: string) => {
    if (title.length > 0 && content.length > 0) {
      await client.mutate({
        mutation: gql`
        mutation {
          updateNote(id: ${cardActive}, note: { title: "${title}", content: """${content}""" }) {
            title
            content
          }
        }
      `,
      });
      getNotes();
    } else {
      alert("Campos em branco, preencha os campos");
      const { title, content } = data[
        data.findIndex((value) => value.id === cardActive)
      ];
      textFieldRef.current.value = title;
      textAreaRef.current.value = content;
    }
  };

  const deleteNote = async (id: number) => {
    await client.mutate({
      mutation: gql`
        mutation {
          deleteNote(id: ${id}) {
            title
            content
          }
        }
      `,
    });
    getNotes();
    setInputShow(false);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const changeFields = (e) => {
    const id = e.target.parentElement.id || e.target.id;
    setCardActive(id);
    const { title, content } = data[data.findIndex((value) => value.id === id)];
    textFieldRef.current.value = title;
    textAreaRef.current.value = content;
    setInputShow(true);
  };

  const clickNewItem = () => {
    if (inputChanged) {
      if (confirm("Do you really want to get off that note without saving?")) {
        newNoteHandle();
        setInputChanged(false);
      } else {
        updateNote(textFieldRef.current.value, textAreaRef.current.value);
        newNoteHandle();
        setInputChanged(false);
      }
    } else {
      newNoteHandle();
    }
  };
  const clickCardItem = (e) => {
    if (e.target.parentElement.id || e.target.id) {
      if (inputChanged) {
        if (
          confirm("Do you really want to get off that note without saving?")
        ) {
          changeFields(e);
          setInputChanged(false);
        } else {
          updateNote(textFieldRef.current.value, textAreaRef.current.value);
          changeFields(e);
          setInputChanged(false);
        }
      } else {
        changeFields(e);
      }
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
        <LeftBar onClick={clickCardItem}>
          <Header>
            <h2>All notes</h2>
            <Container>
              <Button onClick={clickNewItem}>Create New Note</Button>
              <SubTitle>{`${data.length} Notes`}</SubTitle>
            </Container>
          </Header>
          <Container column scroll>
            {data.map((value, index) => (
              <CardPreview
                status={value.id === cardActive}
                id={value.id}
                key={index}
                title={value.title}
                lastModified={value.createdat}
                content={
                  value.content.length > 49
                    ? `${value.content.substring(0, 49)} ...`
                    : value.content
                }
              />
            ))}
          </Container>
        </LeftBar>
        <RightBar>
          <Container column>
            <TextField
              onChange={() => setInputChanged(true)}
              show={inputsShow}
              ref={textFieldRef}
            />
            <TextArea
              onChange={() => setInputChanged(true)}
              show={inputsShow}
              ref={textAreaRef}
            />
            <FloatButtonContainer>
              <FloatButton
                show={inputChanged}
                onClick={() => {
                  updateNote(
                    textFieldRef.current.value,
                    textAreaRef.current.value
                  );
                  setInputChanged(false);
                }}
              >
                Save
              </FloatButton>
              <FloatButton
                show={cardActive}
                onClick={() => {
                  deleteNote(cardActive);
                }}
              >
                Delete
              </FloatButton>
            </FloatButtonContainer>
          </Container>
        </RightBar>
      </Container>
    </>
  );
}
