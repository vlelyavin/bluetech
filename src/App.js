import { useEffect, useRef } from "react";
import "./assets/style/main.css";
import { Areas } from "./components/Areas";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { IntroBanner } from "./components/IntroBanner";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import SmoothScrollbar from "smooth-scrollbar";

export const App = () => {
  const introRef = useRef();
  const productsRef = useRef();
  const areasRef = useRef();
  const contactRef = useRef();
  const servicesRef = useRef();

  const appRef = useRef();
  const options = {
    damping: 0.03,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true,
    overscrollEffect: true,
    plugins: {
      disableOverflowX: true,
    },
  };

  useEffect(() => {
    SmoothScrollbar.init(appRef.current, options);
    // window.addEventListener("resize", () => {
    //   if (window.innerWidth > 800) {
    //     SmoothScrollbar.init(appRef.current, options);
    //   } else {
    //     SmoothScrollbar.destroy(appRef.current, options);
    //   }
    // });
    // if (window.innerWidth > 800) {
    //   SmoothScrollbar.init(appRef.current, options);
    // } else {
    //   SmoothScrollbar.destroy(appRef.current, options);
    // }
  }, []);
  return (
    <>
      <Header ref={{ appRef, introRef, productsRef, areasRef, servicesRef, contactRef }} />
      <div ref={appRef} className="app">
        <IntroBanner ref={{ contactRef, appRef }} />

        <Intro ref={{ introRef, contactRef, appRef }} />

        <Products ref={{ productsRef, contactRef, appRef }} />

        <Services ref={{ servicesRef, appRef, contactRef }} />
        <Areas ref={{ areasRef, appRef, contactRef }} />

        <Footer ref={contactRef} />
      </div>
    </>
  );
};
