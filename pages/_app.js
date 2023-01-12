// import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/Styles/Theme";
import "../components/Styles/FontFace.css";
import Store from "../stores";
import Nav from "../components/Nav";
import { initialState as appStore } from "../stores/AppStore";
import GlobalStyles from "../components/Styles/GlobalStyles";
import scrollToWithCb from '../lib/Utils/scrollToWithCb';

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

const MyApp = ({ Component, pageProps, router }) => {
  const onExitComplete = () => {
    if (router.pathname === "/" || router.pathname === "/work/*") {
      return;
    }
    resetScrollPosition();
  };

  const initRouterListeners = () => {
    const routes = [];

    router.events.on("routeChangeStart", (url) => {
      pushCurrentRouteInfo();
    });

    function pushCurrentRouteInfo() {
      const { scrollY } = window;
      routes.push({ pathname: router.pathname, scrollY });
    }
  };

  const resetScrollPosition = () => {
    scrollToWithCb({ top: 0, left: 0 });
  };

  useEffect(() => {
    initRouterListeners();
    resetScrollPosition();
  }, []);

  return (
    <ThemeWrapper>
      <Store.Provider initialState={initialState}>
        {/* <AnimatePresence exitBeforeEnter> */}
        {/* <motion.div */}
        {/* variants={pageVariants}
        key={router?.asPath}
        transition={{ ...pageTransition }}
        initial="initial"
        animate="in"
        exit="out" > */}
        <Component {...pageProps} />
        {/* </motion.div> */}
        {/* </AnimatePresence> */}
        <GlobalStyles />
        <Nav />
      </Store.Provider>
    </ThemeWrapper>
  );
};

export default MyApp;
