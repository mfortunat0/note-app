import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #f1f1f1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

const Theme = {
  softWhite: "#f1f1f1",
  purple: "#8d27f5",
  dark: "#303841",
  black: "#3a4750",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
        <Global />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
