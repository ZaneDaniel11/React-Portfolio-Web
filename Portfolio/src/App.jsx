import React, { useState } from "react";
import Abouts from "./About";
import StockTicker from "./Components/Infinitescroll";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import LoadingScreen from "./Loading";
import Github from "./SocialsGithub/Github";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Abouts />
          <Technology />
          <StockTicker />
          <Portfolio />
          <Github />
        </>
      )}
    </>
  );
}

export default App;
