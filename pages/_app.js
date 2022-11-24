import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Theme";
import "../components/Styles/FontFace.css";
import Store from "../stores";
import { initialState as appStore } from "../stores/AppStore";
import GlobalStyles from "../components/Styles/GlobalStyles";

// Build initial state
const initialState = {
  ...appStore,
};

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.42, 0, 0.58, 1],
  duration: 0.3,
};

const pageStyle = {
  position: "absolute",
};

export default function Home() {
  return (
    <ThemeWrapper>
      <Store.Provider initialState={initialState}></Store.Provider>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <p>Hey world</p>
        </main>
      </div>
      <GlobalStyles />
    </ThemeWrapper>
  );
}
